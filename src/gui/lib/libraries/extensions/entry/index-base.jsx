import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';

let formatMessage = messageData => messageData.defaultMessage;

const setFormatter = formatter => {
    formatMessage = formatter;
};

const message = (key) => {
    const id = `${entry.extensionId}.entry.${key}`
    const defaultMessage = translations[id] || translations.en[id]
    const description = `${key} of the extension`
    return formatMessage({id, defaultMessage, description})
};

const entry = {
    get name () { return message('name') },
    get description () { return message('description') },
    extensionId: 'webapiExtension',
    extensionURL: 'https://tfabworks.github.io/xcx-webapi/dist/webapiExtension.mjs',
    collaborator: 'TFabWorks',
    iconURL,
    insetIconURL,
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://tfabworks.github.io/xcx-webapi/',
    translationMap: translations
};

export {entry, setFormatter};
