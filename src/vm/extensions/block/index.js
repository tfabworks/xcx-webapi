import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import Cast from '../../util/cast';
import log from '../../util/log';
import translations from './translations.json';
import blockIcon from './block-icon.png';

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
let formatMessage = messageData => messageData.default;

/**
 * Setup format-message for this extension.
 */
const setupTranslations = () => {
    const localeSetup = formatMessage.setup();
    if (localeSetup && localeSetup.translations[localeSetup.locale]) {
        Object.assign(
            localeSetup.translations[localeSetup.locale],
            translations[localeSetup.locale]
        );
    }
};

const EXTENSION_ID = 'webapiExtension';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
let extensionURL = 'https://tfabworks.github.io/xcx-webapi/dist/webapiExtension.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
class ExtensionBlocks {
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    static set formatMessage (formatter) {
        formatMessage = formatter;
        if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return formatMessage({
            id: 'webapiExtension.name',
            default: 'WebAPI Client',
            description: 'name of the extension'
        });
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
    static get extensionURL () {
        return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */
    static set extensionURL (url) {
        extensionURL = url;
    }

    /**
     * Construct a set of blocks for WebAPI Client.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        if (runtime.formatMessage) {
            // Replace 'formatMessage' to a formatter which is used in the runtime.
            formatMessage = runtime.formatMessage;
        }
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        setupTranslations();
        return {
            id: ExtensionBlocks.EXTENSION_ID,
            name: ExtensionBlocks.EXTENSION_NAME,
            extensionURL: ExtensionBlocks.extensionURL,
            blockIconURI: blockIcon,
            showStatusButton: false,
            blocks: [
                {
                    opcode: 'getWebContents',
                    blockType: BlockType.REPORTER,
                    blockAllThreads: false,
                    text: formatMessage({
                        id: 'webapiExtension.getWebContents',
                        default: 'get data from URL [URL]',
                        description: 'get data from URL'
                    }),
                    func: 'getWebContents',
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://httpbin.org/get'
                        }
                    }
                },
                {
                    opcode: 'readStringAsJson',
                    blockType: BlockType.REPORTER,
                    blockAllThreads: false,
                    text: formatMessage({
                        id: 'webapiExtension.readStringAsJson',
                        default: 'value of [QUERY] in JSON data [VALUE]',
                        description: 'value of QUERY in JSON data VALUE'
                    }),
                    func: 'readStringAsJson',
                    arguments: {
                        QUERY: {
                            type: ArgumentType.STRING,
                            defaultValue: '.headers.Referer'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: '{}'
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }

    async getWebContents(args) {
        const url = Cast.toString(args.URL);
	return await(fetch(url, {mode: 'cors', headers: {'Accept': 'application/json'}}).then(response => response.text()).catch(e => ''));
    }

    readStringAsJson(args) {
        const query = Cast.toString(args.QUERY);
        const value = typeof args.VALUE == 'string' ? args.VALUE : Cast.toString(args.VALUE);
	let data = '';
	try { data = JSON.parse(value); } catch(e) {}
	const keys = query.split('.').map(s => s.trim().replace(/^\[/, '').replace(/\]$/, '')).filter(s => s != '');

	const lookup = keys.reduce((d, key) => {
	    switch(typeof d.value) {
	    case "undefined":
		return d;
	    case "object":
		if(d.value === null) {
		    return {"error": `cannot lookup ${key} ` + JSON.stringify(d.value, null, 2)}
		} else if(Array.isArray(d.value)) {
		    const index =
			  key == 'first' ? 0 :
			  (key == 'last' ? (d.value.length - 1) :
			   (parseInt(key.replace(/[０-９]/g, m => '０１２３４５６７８９'.indexOf(m)))));
		    if(0 <= index && index < d.value.length) {
			return {"value": d.value[index]};
		    } else {
			return {"error": `invalid index ${index} length ${d.value.length}`}
		    }
		} else {
		    if(typeof d.value[key] !== 'undefined') {
			return {"value": d.value[key]};
		    } else {
			return {"error": `cannot lookup ${key} ` + JSON.stringify(d.value, null, 2)}
		    }
		}
	    default:
		return {"error": `cannot lookup ${key} ` + JSON.stringify(d.value, null, 2)}
	    }
	}, {"value": data});

	if(typeof lookup.error != 'undefined') {
	    //log.log(lookup.error);
	    return '';
	} else {
	    switch(typeof lookup.value) {
	    case "boolean":
	    case "number":
	    case "bigint":
	    case "string":
		return lookup.value;
	    case "undefined":
		return '';
	    default:
		return JSON.stringify(lookup.value, null, 2);
	    }
	}
    }
}

export {ExtensionBlocks as default, ExtensionBlocks as blockClass};
