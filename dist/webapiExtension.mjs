var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAIAAABwgtBbAAAQZUlEQVR42uzd32vW9d/A8furzrldNd3mNuY15/wxpo3KgzSWC00P6gsjAsGTTvTEg44XxE4KD4Kk+gcChyhhwhBN1JMSMSchgiI2Qistbahz6lXafqDcH7Ybb+5u2ne7ro/Xrvfn83gcSKS7vHzPl8/r89712ftfAwMD/wUAaTXHEgAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAwhXnF/y0/+eQT615qXn755bfeess6YHJNritCUurixYsHDhwYGRmxFGByhZCUun79uokCkyuEpNqtW7dMFJhcIcREmSgwuUJI6icql8tZCjC5Qkh6J6q3t/fOnTuWAkyuEJJSIyMjX375pYkCkyuEmCgTBSZXCDFRgMkVQlI7UXv27Pnhhx8sBZhcISS9vv76axMFJlcIMVEmCkyuEGKiAJMrhKR5ovr7+60DmNzEmFfiz6+3t9cnqRBHjx7t6+uL9zFPnz6dy+Uc/oLJNbmuCEmvixcvnjhxwjqAyRVCTBRgcsM2zxJQyERFP27atGnBggVWA0yuK0JSOlEOfwGTK4SkmoPQwOQKISbKRIHJFUJMlIkCkyuEBC2TyRQ4UXv37vUN78HkCiGhamlp2blzZyFDdf/+fYe/gMkVQgLW0dHxwQcfFDJRDkIDkyuEhK2pqclEgckVQkxUDBN19epViwkmVwhJ70T19fU5/AVMrhAS8ETt2rWrpaWlkAdxEBqYXCEkYDU1Ne+//76JApMrhKRXZWWliQKTK4SYqBgmyuEvYHKFkLAnat26dYU8iIPQwOQKIWFP1Hvvvbdx40YTBSZXCEmv7du3mygwuUKIiSp0onzDezC5QkiqJ+r69etaCCZXCAl7onbu3FnIIzgIDUyuEBK2jo4OEwUmVwgxUTFMVC6Xs5hgcoWQ9E5Ub2+vY5vA5AohAU9UT0+Pg9DA5Aoh6dXa2upQUDC5QkiqOSAbTK4QYqJimKg9e/Y4qgJMrhAS9kTV1dUV8iCObQKTK4SEPVEfffSRg9DA5Aoh6eVQUDC5QoiJimei+vv7LSaYXCEkvRN1+vRpxzaByRVCAp6oDz/80EFoYHKFkFRzKCiY3JI1z2eaok1U9OOpU6cKmajox02bNi1YsMB6gsl1RUhKX106tglMrhAS9kRt3bq1kEdwhCGYXCEkbF1dXQ4FBZMrhKSaA7LB5AohJiqGidq7d6+jKsDkCiFhT1Qh3/D+/v37jm0CkyuEhD1RjjAEkyuEpJpDQcHkCiEmKp6Junr1qsUEkyuEpHei+vr6HNsEJlcICXiidu3a5QhDMLlF5nuN8r8ePnx45cqV2X0O77zzzhdffBE9k0ImKvrxhRde8AnF5JpcIWRmrl279vHHHyfgD6KFmFyTO322RkmmaKIc2wQmVwhJNUcYgskVQkyUFoLJFUJSP1E3btywDmByhRAAhBAAhBAAhBAAhBAAIbQEAAghAAghAAghCfPnn39aBAAhTK/nnnvOIgBMwTFMCdc1IZfLDQ4Ojo2NJebP9fnnn/vkkvjJnfzv27dvDw0NPX782OS6IiR/VVVVq1atamhosBQQnPr6+tbW1miKLYUQUpC5c+dG47R69WrjBMEpKytbtmzZihUr5s+fbzWEEOMEKZXJZNra2hoaGqLXtVZDCDFOkFL19fXR/FZXV1sKISSGcfKFBwhR9BK2qalpxYoVFRUVVkMIKYidUghXJpNZtWrVkiVLbO0IITGMk51SCFRtba2dUiEkHnZKIVB2SoWQ2NgphXDZKRVC4hwnO6UQKDulQkhs7JRCoOyUCiGxebpTapwgOHZKhRDjBNgpFUKME6Te051Sh7IJIbGNk51SCE4mk1m+fPnSpUtt7QghMYyTnVII1KJFi9ra2hYvXmwphJBC2SmFQEUvYRsbG6OXs3ZKhZAYxslOKQQqGls7pUJIPOyUQrjslAohsbFTCoGyUyqExDlOdkohUCnfKRVC4jS5U+oLDxCi1O6UCiHGCfgf6dwpFUKME/B/PN0pTcmJbEJIMcbJTikEZ9GiRdFr2YaGBiGEGMbJTimEKHoJW19fv3r16mRv7QghRRonO6UQqLKysuXLly9btiypO6VCSPHYKYVwVVVVJXWnVAgpNjulEKik7pQKIbMzTnZKIVDJ2ykVQmaNnVIIV5J2SoWQWWanFAKVmJ1SIaQkxqmxsTHxb9GGRErATum8tH3Obty48ddff+X3sRUVFU1NTTP6kOHh4bt375bmUmSz2crKyjw+MI8/VGtr6zTHKZfLDQ4Ojo2N+fcFAlJVVZXJZKJ/GW7duiWEpe7AgQOXL1/O72Pb29u7u7tn9CH9/f19fX2luRQ9PT3T6VMsf6je3t40jBOk2eROaXV19e+//x69og3omdsapUTHyU4phKisrGzZsmUrVqwIaKdUCCndcUr2N7OABMtkMm1tbQ0NDUG8J1wIKWkJ/mYWkHj19fWtra3RFAshFMROKYQriJ3SeT5PhDJO3lOah+jVQyaTKZ8QvaQYnzA6OvrgwYORkRHrQ3FM7pTevn1bCKFQT99Tain+o+rq6pqamugFxN9eT0QqKyujn42KODQ0FBXRWlEc9fX1QggxmNwptQ5TXz1ns9kFCxb8x1/W2NgYFTF6nf7o0SPrRmoJISRK1L8ZffvW6Nc3NzdHIYyuDuWQdPJmGUjQPM+Zk983Ma+srGye8LetVBBCICRLliwp5LatKIcrV65sbGyUQ1LF1igkRJSxWO4wWTjhwYMHQ0ND4+PjFhYhBMJQU1MT46NFLYyyeu/eveHh4SdPnlhehBAoaXPmzIn9Gw7MnTt38eLF1dXVkzm0yAghULqmvlni2rVr586du3PnzsqVK1966aXGxsY8crhx48ZTp05ZaoQweDM9R6lAXRMStoaJ/EOFboqjJe/evXvs2LHJ//5pQjabXb9+/UxzuH379rfffvvIkSNySMJ41ygkXHQ5+Lf/c/PmzUOHDh0+fPiPP/6Y0UPV1NREOfzss8/a29stLEIIhC3K4b59+06ePJlHDru7u3t6euSQZPA1Qki1gQlr1qzZsGHDjM4HaG1tjXJ45cqV6Mry8uXLVhJXhEDYOYyuDs+fPz/Tkz0mc7hz5866ujrLiCtCIGCjo6Pff//9hQsX1q5d++KLL87o6rBjwtmzZw8dOnTnzh2LiStCIOwcHjx48Mcff5zpx0Yt3L1799atWzOZjJXEFSEQsFwu980335w7d27dunVtbW0z+tiurq7Nmzc/oye2Y8eOWB6nt7e3dJ5MT09Pa2trgQ/y6aefxvKV2liejCtCIFE53L9//+Dg4Iw+cIqbGkEIgfByOHnT4UxzCKGwNUqQenp6pv+L6+rqZvTWjxA964OTJu/Bz2aznZ2dtbW1/gYihDDLUvhljFIQ5fCrr75as2bNK6+88vzzz1sQhBBIo6f34MshQgikOoc///xzHjcdghACCVHIPfhQOrxrFIghh/v27bt06ZLVQAiB9Obw9OnT+/fvz+Nb0oAQAs9QLpcr5u81eQ/+/z8EEYQQmAWXLl0aGBgofnqPHTvmHnxC4c0ylJyxsbEzZ84U8zomqW7evDm7v/vkPfjr169vbGz06UAIYbqOHz8+u/+CE3sO3XSIEJaQs2fP3r17d7Z+99ra2o6OjkCffCG6urpCuY7hWXAPPkJYQs6cORPLYSX5aW9vLySEs/vkixZCkp3DtWvXRjl00yFCCKTUhQsXJnPoHnxKhHeNAsX29B788+fPWw2EEEh1Dt2DjxACqTZ5D35/f7+lQAiB9Lpw4YJFQAiBVBsbG7MICCGQUtls1jtImS1unwBmU3l5+eStFNP5xe3t7aXzzON6MhUVFYU/SHNzc+k8GSEEmK6Z3lzf3d1dOk++pJ7Mtm3b/HUSQiAkvt0aQgik1MqVK1977TUJRAiB1HEkE0II0/3n0gEUEghC+KzE9d6qWfndZ/fJF82///3vkydP/vTTT+YzAaqqqjo7O1taWiwFQlgqgn5vVUreGDZ//vw333zTcBZubGzszJkzAwMDs5XAdevWtbW1+UQghMCsvaR44403crlckbeay8vL169fP81bA0EIgWerqampaCF8ene8bxODEAKp8+qrr0ogQgikkbvjEUJAAkEIgTTJZrOdnZ21tbWWAiEEUpdAd8cjhEAaVVVVbdmyRQIRQph9O3bsmP4vfvfdd5uampK9IIsnPNMEujseIQTSqLy8vLOzUwIRQiCNCXR3PEIISODMnD179tChQ7t377aMCCEQpDVr1mzYsCGPBF65cuXw4cOXL1+2hgghEGoC87s7XgIRQiBs2Wx28+bNeSRweHj4wIED586ds4YIIRBqAvO7Oz5K4JEjR06dOmUNEUIgSHV1dZ2dnXkk8NGjRwcPHpRAhBAIw5IlS/72f/K+Oz5K4LfffnvixImHDx9aWIQQKCFRov7pp6Jrvi1btnz33Xejo6N5J/Dx48fHjx+XQIQQKFEjIyNT/GzbhLwf/MGDB0NDQ319fdYZIQRK1JMnT6KLwsrKyngfdjKB4+PjVhghBEpdFK0YQxhl9fbt21NfaIIQAqUVwoULFxbewiiB0VXgFF90BCEEStTg4GBLS8vcuXPz+/Do+i+6CpRAhDDhDh48+Ouvv/7TzzY3N2/btm2mj3n06FF/k6bW1dVlEYpgfHz8t99+W7p06UxbGH1gdBUYXVNaQ4Qw+aIKxv4dEb2bTghLR3RVF7Uwm82WlZVJIAghpLSFv/zyS01NTXV19RSXho8fP753797w8PCTJ08sGkIIJErUtug6L4rcwoULM5lMRUXF0yJGl4Cjo6N/TJBAEEJIeA7vTbAUMIU5lgAAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQSAhEndt1jbsGHD6tWr/+lna2tr83jM9vZ2f5MAhDAMHR0dsT9md3e3v0kAgbI1CoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAsDsmFfiz+/o0aM+SRAck4sQxqavr88nCYJjcgmIrVEAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAgjcLp0+8/vrr1p1iqqqqsggmF5P7T/41MDBguQFILVujAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAGH4bwEGAC4CxrSaHeH4AAAAAElFTkSuQmCC";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 26.3.1%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='%e3%83%ac%e3%82%a4%e3%83%a4%e3%83%bc_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'%3e%3cg%3e %3cpath fill='white' d='M12.912%2c18.56c-0.009%2c0.002-0.019%2c0.003-0.028%2c0.005l-4.376%2c0.806c-0.987%2c0.182-1.934-0.47-2.117-1.456 L4.553%2c8.026C4.37%2c7.042%2c5.018%2c6.095%2c6.001%2c5.908l4.064-0.773C12.288%2c4.72%2c14.103%2c5%2c15.468%2c5.966 c1.314%2c0.919%2c2.184%2c2.457%2c2.578%2c4.566c0.419%2c2.239%2c0.142%2c4.087-0.823%2c5.491C16.319%2c17.341%2c14.868%2c18.194%2c12.912%2c18.56z M11.197%2c13.71l0.115-0.022c0.859-0.161%2c1.219-0.404%2c1.289-0.511c0.025-0.036%2c0.258-0.396%2c0.001-1.645 c-0.227-1.102-0.521-1.358-0.524-1.361c-0.034-0.021-0.373-0.186-1.483%2c0.022l-0.054%2c0.01L11.197%2c13.71z'/%3e %3cpath fill='%23606060' d='M12.555%2c16.777l-4.377%2c0.806L6.341%2c7.695l4.063-0.773c1.722-0.322%2c3.059-0.146%2c4.013%2c0.529 c0.922%2c0.646%2c1.536%2c1.785%2c1.841%2c3.416C16.889%2c14.236%2c15.654%2c16.206%2c12.555%2c16.777z M10.26%2c8.407L8.419%2c8.751l1.324%2c7.081 l1.903-0.356c1.228-0.23%2c2.051-0.661%2c2.47-1.293c0.456-0.665%2c0.544-1.671%2c0.267-3.017c-0.27-1.305-0.718-2.151-1.344-2.537 C12.455%2c8.243%2c11.529%2c8.17%2c10.26%2c8.407z'/%3e%3c/g%3e%3cg%3e %3cpath fill='white' d='M29.822%2c18.245l-1.406-0.515c-0.515-0.189-0.86-0.676-0.867-1.224l-0.014-1.173l-1.304-0.482l-0.785%2c0.892 c-0.36%2c0.41-0.934%2c0.556-1.446%2c0.369l-1.355-0.496c-0.414-0.152-0.725-0.5-0.829-0.929c-0.104-0.428%2c0.013-0.88%2c0.311-1.205 l5.336-5.806c0.361-0.394%2c0.924-0.53%2c1.426-0.347l1.483%2c0.543c0.5%2c0.183%2c0.841%2c0.649%2c0.865%2c1.18l0.357%2c7.891 c0.02%2c0.441-0.183%2c0.863-0.538%2c1.125C30.701%2c18.331%2c30.237%2c18.397%2c29.822%2c18.245z'/%3e %3cpath fill='%23606060' d='M25.838%2c13.298l-1.384%2c1.574L23.1%2c14.376l5.336-5.806l1.483%2c0.543l0.357%2c7.891l-1.406-0.515l-0.025-2.081 L25.838%2c13.298z M28.829%2c13.284L28.8%2c10.045l-0.086-0.031l-2.14%2c2.445L28.829%2c13.284z'/%3e%3c/g%3e%3cg%3e %3cpath fill='white' d='M31.721%2c30.103l-1.342%2c0.587c-0.492%2c0.215-1.064%2c0.104-1.44-0.279l-0.803-0.819l-1.247%2c0.542l0.049%2c1.161 c0.023%2c0.533-0.284%2c1.025-0.773%2c1.239L24.873%2c33.1c-0.395%2c0.173-0.851%2c0.137-1.214-0.095c-0.363-0.232-0.586-0.631-0.595-1.062 l-0.157-7.711c-0.011-0.523%2c0.294-1%2c0.773-1.21l1.415-0.619c0.477-0.209%2c1.033-0.111%2c1.41%2c0.249l5.59%2c5.334 c0.312%2c0.298%2c0.455%2c0.734%2c0.38%2c1.159C32.401%2c29.57%2c32.117%2c29.93%2c31.721%2c30.103z'/%3e %3cpath fill='%23606060' d='M25.561%2c29.303l0.087%2c2.048l-1.293%2c0.566l-0.157-7.711l1.416-0.619l5.59%2c5.334l-1.342%2c0.587l-1.425-1.453 L25.561%2c29.303z M27.665%2c27.271l-2.211-2.269l-0.082%2c0.036l0.141%2c3.175L27.665%2c27.271z'/%3e%3c/g%3e%3cg%3e %3cpath fill='white' d='M11.168%2c34.098L9.79%2c33.807c-0.729-0.154-1.195-0.87-1.041-1.599l1.028-4.869l-1.309-0.276 c-0.729-0.154-1.195-0.87-1.041-1.599l0.231-1.095c0.154-0.729%2c0.87-1.195%2c1.599-1.041l6.682%2c1.411 c0.729%2c0.154%2c1.195%2c0.87%2c1.041%2c1.599l-0.231%2c1.095c-0.154%2c0.729-0.87%2c1.195-1.599%2c1.041l-1.354-0.286l-1.028%2c4.869 C12.614%2c33.786%2c11.897%2c34.252%2c11.168%2c34.098z'/%3e %3cpath fill='%23606060' d='M12.754%2c26.589l-1.307%2c6.189l-1.378-0.291l1.307-6.189l-2.629-0.555l0.231-1.095l6.682%2c1.411l-0.231%2c1.095 L12.754%2c26.589z'/%3e%3c/g%3e%3c/svg%3e";

var en$1 = {
	"webapiExtension.entry.name": "DATA Tool",
	"webapiExtension.entry.description": "Retrieve values from WebAPI."
};
var ja$1 = {
	"webapiExtension.entry.name": "DATA Tool",
	"webapiExtension.entry.description": "WebAPIで天気予報等を取得する。"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"webapiExtension.entry.name": "DATA Tool",
	"webapiExtension.entry.description": "WebAPIでてんきようほうなどをしゅとくする。"
}
};

var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var setFormatter = function setFormatter(formatter) {
  formatMessage$1 = formatter;
};
var message = function message(key) {
  var id = "".concat(entry.extensionId, ".entry.").concat(key);
  var defaultMessage = translations$1[id] || translations$1.ja[id];
  var description = "".concat(key, " of the extension");
  return formatMessage$1({
    id: id,
    defaultMessage: defaultMessage,
    description: description
  });
};
var entry = {
  get name() {
    return message('name');
  },
  get description() {
    return message('description');
  },
  extensionId: 'webapiExtension',
  extensionURL: 'https://tfabworks.github.io/xcx-webapi/dist/webapiExtension.mjs',
  collaborator: 'TFabWorks',
  iconURL: img$2,
  insetIconURL: img$1,
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: true,
  helpLink: 'https://tfabworks.github.io/xcx-webapi/',
  translationMap: translations$1
};

/**
 * This is an extension for Xcratch
 */
Object.assign(entry, {
  setFormatMessage: function setFormatMessage(formatter) {
    return setFormatter(formatter);
  }
});

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

function _typeof$2(o) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$2(o);
}

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function toPrimitive$1(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}

function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}

function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey$1(o.key), o);
  }
}
function _createClass$1(e, r, t) {
  return _defineProperties$1(e.prototype, r), _defineProperties$1(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof$1 = {exports: {}};

(function (module) {
  function _typeof(o) {
    "@babel/helpers - typeof";

    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof$1);
var _typeofExports = _typeof$1.exports;

(function (module) {
  var _typeof = _typeofExports["default"];
  function _regeneratorRuntime() {

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: true
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      undefined === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = true;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      "catch": function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof$2(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',
  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',
  /**
   * Command block
   */
  COMMAND: 'command',
  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',
  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',
  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',
  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',
  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;
var BlockType$1 = /*@__PURE__*/getDefaultExportFromCjs(blockType);

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',
  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',
  /**
   * Numeric value with color picker
   */
  COLOR: 'color',
  /**
   * Numeric value with text field
   */
  NUMBER: 'number',
  /**
   * String value with text field
   */
  STRING: 'string',
  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',
  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',
  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;
var ArgumentType$1 = /*@__PURE__*/getDefaultExportFromCjs(argumentType);

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }
  return _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }

    /** @type {RGBObject} */
  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }

    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */
  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }
      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }

    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }

    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */
  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }

    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */
  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }

    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */
  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }

    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }
      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }

    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */
  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b);

      // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
      var h = 0;
      var s = 0;
      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }
      return {
        h: h,
        s: s,
        v: v
      };
    }

    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */
  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);
}();
var color$3 = Color$1;

var Color = color$3;

/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */
var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }
  return _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }
        return value;
      }
      var n = Number(value);
      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }
      return n;
    }

    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */
  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }
      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        }
        // All other strings treated as true.
        return true;
      }
      // Coerce other values and numbers.
      return Boolean(value);
    }

    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */
  }, {
    key: "toString",
    value: function toString(value) {
      return String(value);
    }

    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }

    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;
      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value);

        // If the color wasn't *actually* a hex color, cast to black
        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }
      return color;
    }

    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */
  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }

    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */
  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);
      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }
      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = String(v1).toLowerCase();
        var s2 = String(v2).toLowerCase();
        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }
        return 0;
      }
      // Handle the special case of Infinity
      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      }
      // Compare as numbers.
      return n1 - n2;
    }

    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */
  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        }
        // True if it's "round" (e.g., 2.0 and 2).
        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }
      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }

    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }
        if (index === 'last') {
          if (length > 0) {
            return length;
          }
          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }
          return Cast.LIST_INVALID;
        }
      }
      index = Math.floor(Cast.toNumber(index));
      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }
      return index;
    }
  }]);
}();
var cast = Cast;
var Cast$1 = /*@__PURE__*/getDefaultExportFromCjs(cast);

var web = {exports: {}};

var minilog$2 = {exports: {}};

function M() {
  this._events = {};
}
M.prototype = {
  on: function on(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function removeListener(ev, cb) {
    var e = this._events[ev] || [],
      i;
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      if (e[i] === cb || e[i].cb === cb) {
        e.splice(i, 1);
      }
    }
  },
  removeAllListeners: function removeAllListeners(ev) {
    if (!ev) {
      this._events = {};
    } else {
      this._events[ev] && (this._events[ev] = []);
    }
  },
  listeners: function listeners(ev) {
    return this._events ? this._events[ev] || [] : [];
  },
  emit: function emit(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1),
      i,
      e = this._events[ev] || [];
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      e[i].apply(this, args);
    }
    return this;
  },
  when: function when(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function once(ev, cb, when) {
    if (!cb) return this;
    function c() {
      if (!when) this.removeListener(ev, c);
      if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function (dest) {
  var o = M.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var microee$1 = M;

var microee = microee$1;

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform$4() {}
microee.mixin(Transform$4);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform$4.prototype.write = function (name, level, args) {
  this.emit('item', name, level, args);
};
Transform$4.prototype.end = function () {
  this.emit('end');
  this.removeAllListeners();
};
Transform$4.prototype.pipe = function (dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);
  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() {
    !dest._isStdio && dest.end();
  }
  s.on('item', onItem);
  s.on('end', onEnd);
  s.when('unpipe', function (from) {
    var match = from === dest || typeof from == 'undefined';
    if (match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });
  return dest;
};
Transform$4.prototype.unpipe = function (from) {
  this.emit('unpipe', from);
  return this;
};
Transform$4.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};
Transform$4.mixin = function (dest) {
  var o = Transform$4.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var transform = Transform$4;

// default filter
var Transform$3 = transform;
var levelMap = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};
function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}
Transform$3.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function (name, level) {
  this._white.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function (name, level) {
  this._black.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};
Filter.prototype.clear = function () {
  this._white = [];
  this._black = [];
  return this;
};
function test(rule, name) {
  // use .test for RegExps
  return rule.n.test ? rule.n.test(name) : rule.n == name;
}
Filter.prototype.test = function (name, level) {
  var i,
    len = Math.max(this._white.length, this._black.length);
  for (i = 0; i < len; i++) {
    if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};
Filter.prototype.write = function (name, level, args) {
  if (!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};
var filter = Filter;

(function (module, exports) {
  var Transform = transform,
    Filter = filter;
  var log = new Transform(),
    slice = Array.prototype.slice;
  exports = module.exports = function create(name) {
    var _o = function o() {
      log.write(name, undefined, slice.call(arguments));
      return _o;
    };
    _o.debug = function () {
      log.write(name, 'debug', slice.call(arguments));
      return _o;
    };
    _o.info = function () {
      log.write(name, 'info', slice.call(arguments));
      return _o;
    };
    _o.warn = function () {
      log.write(name, 'warn', slice.call(arguments));
      return _o;
    };
    _o.error = function () {
      log.write(name, 'error', slice.call(arguments));
      return _o;
    };
    _o.log = _o.debug; // for interface compliance with Node and browser consoles
    _o.suggest = exports.suggest;
    _o.format = log.format;
    return _o;
  };

  // filled in separately
  exports.defaultBackend = exports.defaultFormatter = null;
  exports.pipe = function (dest) {
    return log.pipe(dest);
  };
  exports.end = exports.unpipe = exports.disable = function (from) {
    return log.unpipe(from);
  };
  exports.Transform = Transform;
  exports.Filter = Filter;
  // this is the default filter that's applied when .enable() is called normally
  // you can bypass it completely and set up your own pipes
  exports.suggest = new Filter();
  exports.enable = function () {
    if (exports.defaultFormatter) {
      return log.pipe(exports.suggest) // filter
      .pipe(exports.defaultFormatter) // formatter
      .pipe(exports.defaultBackend); // backend
    }
    return log.pipe(exports.suggest) // filter
    .pipe(exports.defaultBackend); // formatter
  };
})(minilog$2, minilog$2.exports);
var minilogExports = minilog$2.exports;

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue: '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color$2(fg, isInverse) {
  if (isInverse) {
    return 'color: #fff; background: ' + hex[fg] + ';';
  } else {
    return 'color: ' + hex[fg] + ';';
  }
}
var util = color$2;

var Transform$2 = transform,
  color$1 = util;
var colors$1 = {
    debug: ['cyan'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$2 = new Transform$2();
logger$2.write = function (name, level, args) {
  var fn = console.log;
  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, color$1('gray'), color$1.apply(color$1, colors$1[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$2.pipe = function () {};
var color_1 = logger$2;

var Transform$1 = transform,
  color = util,
  colors = {
    debug: ['gray'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$1 = new Transform$1();
logger$1.write = function (name, level, args) {
  var fn = console.log;
  if (level != 'debug' && console[level]) {
    fn = console[level];
  }
  var i = 0;
  if (level != 'info') {
    for (; i < args.length; i++) {
      if (typeof args[i] != 'string') break;
    }
    fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), color.apply(color, colors[level])].concat(args.slice(i)));
  } else {
    fn.apply(console, ['%c' + name, color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$1.pipe = function () {};
var minilog$1 = logger$1;

var Transform = transform;
var newlines = /\n+$/,
  logger = new Transform();
logger.write = function (name, level, args) {
  var i = args.length - 1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if (console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if (JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if (args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for (i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch (e) {}
    console.log(args.join(' '));
  }
};
logger.formatters = ['color', 'minilog'];
logger.color = color_1;
logger.minilog = minilog$1;
var console_1 = logger;

var array;
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  var Transform = transform,
    cache = [];
  var logger = new Transform();
  logger.write = function (name, level, args) {
    cache.push([name, level, args]);
  };

  // utility functions
  logger.get = function () {
    return cache;
  };
  logger.empty = function () {
    cache = [];
  };
  array = logger;
  return array;
}

var localstorage;
var hasRequiredLocalstorage;
function requireLocalstorage() {
  if (hasRequiredLocalstorage) return localstorage;
  hasRequiredLocalstorage = 1;
  var Transform = transform,
    cache = false;
  var logger = new Transform();
  logger.write = function (name, level, args) {
    if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
    try {
      if (!cache) {
        cache = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
      }
      cache.push([new Date().toString(), name, level, args]);
      window.localStorage.minilog = JSON.stringify(cache);
    } catch (e) {}
  };
  localstorage = logger;
  return localstorage;
}

var jquery_simple;
var hasRequiredJquery_simple;
function requireJquery_simple() {
  if (hasRequiredJquery_simple) return jquery_simple;
  hasRequiredJquery_simple = 1;
  var Transform = transform;
  var cid = new Date().valueOf().toString(36);
  function AjaxLogger(options) {
    this.url = options.url || '';
    this.cache = [];
    this.timer = null;
    this.interval = options.interval || 30 * 1000;
    this.enabled = true;
    this.jQuery = window.jQuery;
    this.extras = {};
  }
  Transform.mixin(AjaxLogger);
  AjaxLogger.prototype.write = function (name, level, args) {
    if (!this.timer) {
      this.init();
    }
    this.cache.push([name, level].concat(args));
  };
  AjaxLogger.prototype.init = function () {
    if (!this.enabled || !this.jQuery) return;
    var self = this;
    this.timer = setTimeout(function () {
      var i,
        logs = [],
        ajaxData,
        url = self.url;
      if (self.cache.length == 0) return self.init();
      // Test each log line and only log the ones that are valid (e.g. don't have circular references).
      // Slight performance hit but benefit is we log all valid lines.
      for (i = 0; i < self.cache.length; i++) {
        try {
          JSON.stringify(self.cache[i]);
          logs.push(self.cache[i]);
        } catch (e) {}
      }
      if (self.jQuery.isEmptyObject(self.extras)) {
        ajaxData = JSON.stringify({
          logs: logs
        });
        url = self.url + '?client_id=' + cid;
      } else {
        ajaxData = JSON.stringify(self.jQuery.extend({
          logs: logs
        }, self.extras));
      }
      self.jQuery.ajax(url, {
        type: 'POST',
        cache: false,
        processData: false,
        data: ajaxData,
        contentType: 'application/json',
        timeout: 10000
      }).success(function (data, status, jqxhr) {
        if (data.interval) {
          self.interval = Math.max(1000, data.interval);
        }
      }).error(function () {
        self.interval = 30000;
      }).always(function () {
        self.init();
      });
      self.cache = [];
    }, this.interval);
  };
  AjaxLogger.prototype.end = function () {};

  // wait until jQuery is defined. Useful if you don't control the load order.
  AjaxLogger.jQueryWait = function (onDone) {
    if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
      return onDone(window.jQuery || window.$);
    } else if (typeof window !== 'undefined') {
      setTimeout(function () {
        AjaxLogger.jQueryWait(onDone);
      }, 200);
    }
  };
  jquery_simple = AjaxLogger;
  return jquery_simple;
}

(function (module, exports) {
  var Minilog = minilogExports;
  var oldEnable = Minilog.enable,
    oldDisable = Minilog.disable,
    isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent),
    console = console_1;

  // Use a more capable logging backend if on Chrome
  Minilog.defaultBackend = isChrome ? console.minilog : console;

  // apply enable inputs from localStorage and from the URL
  if (typeof window != 'undefined') {
    try {
      Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
    } catch (e) {}
    if (window.location && window.location.search) {
      var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
      match && Minilog.enable(decodeURIComponent(match[1]));
    }
  }

  // Make enable also add to localStorage
  Minilog.enable = function () {
    oldEnable.call(Minilog, true);
    try {
      window.localStorage['minilogSettings'] = JSON.stringify(true);
    } catch (e) {}
    return this;
  };
  Minilog.disable = function () {
    oldDisable.call(Minilog);
    try {
      delete window.localStorage.minilogSettings;
    } catch (e) {}
    return this;
  };
  exports = module.exports = Minilog;
  exports.backends = {
    array: requireArray(),
    browser: Minilog.defaultBackend,
    localStorage: requireLocalstorage(),
    jQuery: requireJquery_simple()
  };
})(web, web.exports);
var webExports = web.exports;

var minilog = webExports;
minilog.enable();
minilog('vm');

var en = {
	"webapiExtension.name": "DATA Tool",
	"webapiExtension.getWebContents": "get data from URL [URL]",
	"webapiExtension.readStringAsJson": "value of [QUERY] in JSON data [VALUE]",
	"webapiExtension.parseCsv": "value of row [ROW] column [COL] in CSV data [CSV] with [SEP] separator",
	"webapiExtension.parseCsv.sep.comma": "comma",
	"webapiExtension.parseCsv.sep.tab": "tab",
	"webapiExtension.parseCsv.sep.space": "space"
};
var ja = {
	"webapiExtension.name": "DATA Tool",
	"webapiExtension.getWebContents": "URL [URL] よりデータを取得する",
	"webapiExtension.readStringAsJson": "JSONデータ [VALUE] の [QUERY] の値",
	"webapiExtension.parseCsv": "CSVデータ [CSV] の [ROW]行 [COL]列目の値 [SEP]区切り",
	"webapiExtension.parseCsv.sep.comma": "カンマ",
	"webapiExtension.parseCsv.sep.tab": "タブ",
	"webapiExtension.parseCsv.sep.space": "スペース"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"webapiExtension.name": "DATA Tool",
	"webapiExtension.getWebContents": "URL [URL] よりデータをしゅとくする",
	"webapiExtension.readStringAsJson": "JSONデータ [VALUE] の [QUERY] のあたい",
	"webapiExtension.parseCsv": "CSVデータ [CSV] の  [ROW]ぎょう [COL]れつめのあたい [SEP]くぎり",
	"webapiExtension.parseCsv.sep.comma": "かんま",
	"webapiExtension.parseCsv.sep.tab": "たぶ",
	"webapiExtension.parseCsv.sep.space": "すぺーす"
}
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABOvAAATrwFj5o7DAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAB4dJREFUWIXtmG1MlNkVx3/z5jDyMuAwSpDhRSCsE2pZ3K4vIGpIpu4WQk1pTVNDjYlJE5tWazZma1rRRGrXBGOaVO0Hda1fisHU3Yi2CtWAFnZBpK0tUBjsoIXGZRamiDMDM7cf7jzTcZwXYN22H3qSJ0/mzrk3v+d/z733nKsSQhDDNEA+UAhYABUwBXQDg7E6virThv1+HXgj8C4B1gCJUfoOAD8Gmj43OgAhBEKIZUKILrE4+4UQQhsY55U/ioLfBd5UoCcmJnA4HMHn8ePHOJ1O5ubmMBqNFBcXU1VVRUZGBsAe4ClwaJEalSBD6BbwafifqkAMnga+MzExweHDh3n27FncUfV6Pfv376eoqAjAB6wF+hYI9y3gfWSse4APgB8hwwf4dwz+FSAtLQ2v1wuAxWKhvLwci8XC8uXLSUpKQghBT08Ply5dwu12c+bMGRoaGjAYDBrgB8C3FwD3NnB+ZmZG09raytq1a/WZmZlfB1YDX1Cc1IF3H4BarWblypUosDabjdWrV2MymdDr9SQkJFBWVkZdXR0Ak5OTdHR0KGN9A0iYJ9w6oMnr9epOnTrFlStXOHToEMPDwwBW5G7xMiBAdnY2AA6HI3TA3yAV+gBg/fr1mEwmALq7uxWfBGDDPOCKgRa/3594+vRpBgcHWbNmDQDPnz9XmIIfqgB+AjwGObUg1XG5XIrfn4CTwD4AlUoVHNRut+Pz+RS/L8aBswAtQohlFy5c4MGDB9hsNmw2GwAej0fxSwoHhICKioLwgoolgfcIMBTqNzc3h9PpDAWIZmbgJmBpamqivb2dkpISduzYgVotMdxud0zAByAVVKlkCIyOjoYDAvwNIDk5OdgQMnAykS0FuAEUXbt2jRs3bqDX66mpqUGtVgcBQxQMHg6hJ0kfgMFgID09nadPn4YqaEKqkwAUQTBeAEhICIbMPyPAJSBjt/TOnTs0NzeTlpbG7OwsR44cITc3l5ycnHDAoIIvAYKcvjBAgE4gU/lx//59QCqZnp6uNA9FAPwesLm3t5eLFy+SmJjIwYMHMZvN9Pf3c/v2be7evTsvwCFgGkiyWCz09PQwPj6O1+tlyZIlKHA+n4+rV6/S29sLwNatW4MhAbRGAFwGkJSURFlZGVu2bGHFihUAo1ar1WK1WhkYGOD48eNxp9gP/BHYoCwAv9/P6OgoBoMBh8PB0NAQPT09TE5OAmC1Wqmurlb6XyNyhnMSKCksLLQVFhYqX3IR2IVMSn6v1+uXzEdBkAtlg7LVABw7dozwlMxoNGKz2di2bZsS4C7gnQhwAP8AtgGrgK8Bk8A5QAD3Aa9Go1kCkVdxOGAfgMlkYunSpczMzKDT6cjMzCQnJweLxUJ+fj45OTmh0/opUAv8JQqgYnbgRIT2IYvFUnL06FHGx8df5gpLb9YpOdTDhw/FkydPhM/ni5Zm+YQQzUKI3M+YUr0mhPi1EMIbGHdGCGFV/leyGcU0QD9QEEWFUWQYtAIfBlR5VWYGypDrYFhpDAcEmeIfAfKQQd8H/CEA5gx3/rwtEuD/lKnju/x37f+AEcwMVAPG+Tj/JwELkBv0KDJ56EMWS7Etyt6UJoT4nRDiEyFEhxDipBDim0KI/EXudXohxJgQQjgcDnHr1i3h9/tFoK04Vt9oq/gd4D2Xy0VKSkr4fxPAR4HnY6ALmZHHslxgpLOzk7NnzwKwadMmdu3ahVqtngC+DPRE6hh+1ClWBtDQ0IDL5SIrK4vc3FwKCwspKioypaSkvAW8FfCdQ9bE78UA9AHBirG0tJT29na8Xi979uwxaTSaVuArwN35AqYCVFVVYbfbsdvttLW1cfPmTUCe1fn5+eTl5bF582atwWB4Nw6gF0Cj0QBQXV1NRkYGLS0tuN1u9u7da9TpdL8FvoosC4IWbZH8FJgsLy+nrq6O+vp6Nm7cCEBFRQUFBQU8evSIy5cvK9nMSzcCYTYLoNVKPTweD7W1tVRWVtLX10djYyMej2cp8vjcHtoxmoLXgQxkvvZz4HW7XR6727dvJzU1FZBpv16vB2ifD6CioNvtxufzkZ2djU6no7+/n8bGRvbt26c3GAxNwG7gl7EAQV5FdAJpHo+HsbExTCaTAjcIDBgMhlJgDDgaB/CFKW5ra+PcuXNMT09TWlqKRqOhq6uLEydOcODAAW1iYuJ54O9AayxAkJtq7sjICH6/n7y8PKX9V8irt/naCwoODw9TUVFBZWUlJpNJ3mJptdy7d4/r169TW1urQSa3cQHXgSzOAVatWqW0f7wAOJDlhE+r1WpAhkllZSXIy9D3VSrVjt27d6+oqanBbDaDnL1miH+SvAkwMjISDvjRAgEBZhUFQ2oPG/B9oFKtVg+YzeZJ4GfI65FWiB2DQUC73Y5KpVLq10fIOmMxgAkAOp1OadME3g+B1yJ1igf4xtTUFE6nk6ysLKVA747TJ5pNm83m5Pr6euVDpwi5B4xmsQA1QLJWq2Xnzp2hX72Y6QU4bzQaf2g0Gr3IRfYT5pOhxznk3xVCeEIKpWdCiILPUCDlCyFSF9JnPil/CvAlZK3SAfx5kQouyv4FXkdRpicwLNMAAAAASUVORK5CYII=";

var papaparse_min = {exports: {}};

(function (module, exports) {
  (function (e, t) {
    module.exports = t() ;
  })(commonjsGlobal, function r() {
    var n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : undefined !== n ? n : {};
    var d,
      s = !n.document && !!n.postMessage,
      a = n.IS_PAPA_WORKER || false,
      o = {},
      h = 0,
      v = {};
    function u(e) {
      this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = {
        data: [],
        errors: [],
        meta: {}
      }, function (e) {
        var t = w(e);
        t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
        this._handle = new i(t), (this._handle.streamer = this)._config = t;
      }.call(this, e), this.parseChunk = function (t, e) {
        var i = parseInt(this._config.skipFirstNLines) || 0;
        if (this.isFirstChunk && 0 < i) {
          var _e = this._config.newline;
          _e || (r = this._config.quoteChar || '"', _e = this._handle.guessLineEndings(t, r)), t = _toConsumableArray(t.split(_e).slice(i)).join(_e);
        }
        this.isFirstChunk && P(this._config.beforeFirstChunk) && undefined !== (r = this._config.beforeFirstChunk(t)) && (t = r), this.isFirstChunk = false, this._halted = false;
        var i = this._partialLine + t,
          r = (this._partialLine = "", this._handle.parse(i, this._baseIndex, !this._finished));
        if (!this._handle.paused() && !this._handle.aborted()) {
          t = r.meta.cursor, i = (this._finished || (this._partialLine = i.substring(t - this._baseIndex), this._baseIndex = t), r && r.data && (this._rowCount += r.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview);
          if (a) n.postMessage({
            results: r,
            workerId: v.WORKER_ID,
            finished: i
          });else if (P(this._config.chunk) && !e) {
            if (this._config.chunk(r, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = true);
            this._completeResults = r = undefined;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r.data), this._completeResults.errors = this._completeResults.errors.concat(r.errors), this._completeResults.meta = r.meta), this._completed || !i || !P(this._config.complete) || r && r.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), i || r && r.meta.paused || this._nextChunk(), r;
        }
        this._halted = true;
      }, this._sendError = function (e) {
        P(this._config.error) ? this._config.error(e) : a && this._config.error && n.postMessage({
          workerId: v.WORKER_ID,
          error: e,
          finished: false
        });
      };
    }
    function f(e) {
      var r;
      (e = e || {}).chunkSize || (e.chunkSize = v.RemoteChunkSize), u.call(this, e), this._nextChunk = s ? function () {
        this._readChunk(), this._chunkLoaded();
      } : function () {
        this._readChunk();
      }, this.stream = function (e) {
        this._input = e, this._nextChunk();
      }, this._readChunk = function () {
        if (this._finished) this._chunkLoaded();else {
          if (r = new XMLHttpRequest(), this._config.withCredentials && (r.withCredentials = this._config.withCredentials), s || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
            var e,
              t = this._config.downloadRequestHeaders;
            for (e in t) r.setRequestHeader(e, t[e]);
          }
          var i;
          this._config.chunkSize && (i = this._start + this._config.chunkSize - 1, r.setRequestHeader("Range", "bytes=" + this._start + "-" + i));
          try {
            r.send(this._config.downloadRequestBody);
          } catch (e) {
            this._chunkError(e.message);
          }
          s && 0 === r.status && this._chunkError();
        }
      }, this._chunkLoaded = function () {
        4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize || r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function (e) {
          return null !== (e = e.getResponseHeader("Content-Range")) ? parseInt(e.substring(e.lastIndexOf("/") + 1)) : -1;
        }(r), this.parseChunk(r.responseText)));
      }, this._chunkError = function (e) {
        e = r.statusText || e;
        this._sendError(new Error(e));
      };
    }
    function l(e) {
      (e = e || {}).chunkSize || (e.chunkSize = v.LocalChunkSize), u.call(this, e);
      var i,
        r,
        n = "undefined" != typeof FileReader;
      this.stream = function (e) {
        this._input = e, r = e.slice || e.webkitSlice || e.mozSlice, n ? ((i = new FileReader()).onload = y(this._chunkLoaded, this), i.onerror = y(this._chunkError, this)) : i = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function () {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function () {
        var e = this._input,
          t = (this._config.chunkSize && (t = Math.min(this._start + this._config.chunkSize, this._input.size), e = r.call(e, this._start, t)), i.readAsText(e, this._config.encoding));
        n || this._chunkLoaded({
          target: {
            result: t
          }
        });
      }, this._chunkLoaded = function (e) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
      }, this._chunkError = function () {
        this._sendError(i.error);
      };
    }
    function c(e) {
      var i;
      u.call(this, e = e || {}), this.stream = function (e) {
        return i = e, this._nextChunk();
      }, this._nextChunk = function () {
        var e, t;
        if (!this._finished) return e = this._config.chunkSize, i = e ? (t = i.substring(0, e), i.substring(e)) : (t = i, ""), this._finished = !i, this.parseChunk(t);
      };
    }
    function p(e) {
      u.call(this, e = e || {});
      var t = [],
        i = true,
        r = false;
      this.pause = function () {
        u.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function () {
        u.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function (e) {
        this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function () {
        r && 1 === t.length && (this._finished = true);
      }, this._nextChunk = function () {
        this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = true;
      }, this._streamData = y(function (e) {
        try {
          t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
        } catch (e) {
          this._streamError(e);
        }
      }, this), this._streamError = y(function (e) {
        this._streamCleanUp(), this._sendError(e);
      }, this), this._streamEnd = y(function () {
        this._streamCleanUp(), r = true, this._streamData("");
      }, this), this._streamCleanUp = y(function () {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function i(m) {
      var n,
        s,
        a,
        t,
        o = Math.pow(2, 53),
        h = -o,
        u = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
        d = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
        i = this,
        r = 0,
        f = 0,
        l = false,
        e = false,
        c = [],
        p = {
          data: [],
          errors: [],
          meta: {}
        };
      function y(e) {
        return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
      }
      function g() {
        if (p && a && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + v.DefaultDelimiter + "'"), a = false), m.skipEmptyLines && (p.data = p.data.filter(function (e) {
          return !y(e);
        })), _()) {
          var _t = function _t(e, t) {
            P(m.transformHeader) && (e = m.transformHeader(e, t)), c.push(e);
          };
          if (p) if (Array.isArray(p.data[0])) {
            for (var e = 0; _() && e < p.data.length; e++) p.data[e].forEach(_t);
            p.data.splice(0, 1);
          } else p.data.forEach(_t);
        }
        function i(e, t) {
          for (var i = m.header ? {} : [], r = 0; r < e.length; r++) {
            var n = r,
              s = e[r],
              s = function (e, t) {
                return function (e) {
                  return m.dynamicTypingFunction && undefined === m.dynamicTyping[e] && (m.dynamicTyping[e] = m.dynamicTypingFunction(e)), true === (m.dynamicTyping[e] || m.dynamicTyping);
                }(e) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function (e) {
                  if (u.test(e)) {
                    e = parseFloat(e);
                    if (h < e && e < o) return 1;
                  }
                }(t) ? parseFloat(t) : d.test(t) ? new Date(t) : "" === t ? null : t) : t;
              }(n = m.header ? r >= c.length ? "__parsed_extra" : c[r] : n, s = m.transform ? m.transform(s, n) : s);
            "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
          }
          return m.header && (r > c.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + c.length + " fields but parsed " + r, f + t) : r < c.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + c.length + " fields but parsed " + r, f + t)), i;
        }
        var r;
        p && (m.header || m.dynamicTyping || m.transform) && (r = 1, !p.data.length || Array.isArray(p.data[0]) ? (p.data = p.data.map(i), r = p.data.length) : p.data = i(p.data, 0), m.header && p.meta && (p.meta.fields = c), f += r);
      }
      function _() {
        return m.header && 0 === c.length;
      }
      function k(e, t, i, r) {
        e = {
          type: e,
          code: t,
          message: i
        };
        undefined !== r && (e.row = r), p.errors.push(e);
      }
      P(m.step) && (t = m.step, m.step = function (e) {
        p = e, _() ? g() : (g(), 0 !== p.data.length && (r += e.data.length, m.preview && r > m.preview ? s.abort() : (p.data = p.data[0], t(p, i))));
      }), this.parse = function (e, t, i) {
        var r = m.quoteChar || '"',
          r = (m.newline || (m.newline = this.guessLineEndings(e, r)), a = false, m.delimiter ? P(m.delimiter) && (m.delimiter = m.delimiter(e), p.meta.delimiter = m.delimiter) : ((r = function (e, t, i, r, n) {
            var s, a, o, h;
            n = n || [",", "\t", "|", ";", v.RECORD_SEP, v.UNIT_SEP];
            for (var u = 0; u < n.length; u++) {
              for (var d, f = n[u], l = 0, c = 0, p = 0, g = (o = undefined, new E({
                  comments: r,
                  delimiter: f,
                  newline: t,
                  preview: 10
                }).parse(e)), _ = 0; _ < g.data.length; _++) i && y(g.data[_]) ? p++ : (d = g.data[_].length, c += d, undefined === o ? o = d : 0 < d && (l += Math.abs(d - o), o = d));
              0 < g.data.length && (c /= g.data.length - p), (undefined === a || l <= a) && (undefined === h || h < c) && 1.99 < c && (a = l, s = f, h = c);
            }
            return {
              successful: !!(m.delimiter = s),
              bestDelimiter: s
            };
          }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = r.bestDelimiter : (a = true, m.delimiter = v.DefaultDelimiter), p.meta.delimiter = m.delimiter), w(m));
        return m.preview && m.header && r.preview++, n = e, s = new E(r), p = s.parse(n, t, i), g(), l ? {
          meta: {
            paused: true
          }
        } : p || {
          meta: {
            paused: false
          }
        };
      }, this.paused = function () {
        return l;
      }, this.pause = function () {
        l = true, s.abort(), n = P(m.chunk) ? "" : n.substring(s.getCharIndex());
      }, this.resume = function () {
        i.streamer._halted ? (l = false, i.streamer.parseChunk(n, true)) : setTimeout(i.resume, 3);
      }, this.aborted = function () {
        return e;
      }, this.abort = function () {
        e = true, s.abort(), p.meta.aborted = true, P(m.complete) && m.complete(p), n = "";
      }, this.guessLineEndings = function (e, t) {
        e = e.substring(0, 1048576);
        var t = new RegExp(M(t) + "([^]*?)" + M(t), "gm"),
          i = (e = e.replace(t, "")).split("\r"),
          t = e.split("\n"),
          e = 1 < t.length && t[0].length < i[0].length;
        if (1 === i.length || e) return "\n";
        for (var r = 0, n = 0; n < i.length; n++) "\n" === i[n][0] && r++;
        return r >= i.length / 2 ? "\r\n" : "\r";
      };
    }
    function M(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(C) {
      var S = (C = C || {}).delimiter,
        O = C.newline,
        x = C.comments,
        I = C.step,
        A = C.preview,
        T = C.fastMode,
        D = null,
        L = null == C.quoteChar ? '"' : C.quoteChar,
        F = L;
      if (undefined !== C.escapeChar && (F = C.escapeChar), ("string" != typeof S || -1 < v.BAD_DELIMITERS.indexOf(S)) && (S = ","), x === S) throw new Error("Comment character same as delimiter");
      true === x ? x = "#" : ("string" != typeof x || -1 < v.BAD_DELIMITERS.indexOf(x)) && (x = false), "\n" !== O && "\r" !== O && "\r\n" !== O && (O = "\n");
      var j = 0,
        z = false;
      this.parse = function (i, t, r) {
        if ("string" != typeof i) throw new Error("Input must be a string");
        var n = i.length,
          e = S.length,
          s = O.length,
          a = x.length,
          o = P(I),
          h = [],
          u = [],
          d = [],
          f = j = 0;
        if (!i) return b();
        if (T || false !== T && -1 === i.indexOf(L)) {
          for (var l = i.split(O), c = 0; c < l.length; c++) {
            if (d = l[c], j += d.length, c !== l.length - 1) j += O.length;else if (r) return b();
            if (!x || d.substring(0, a) !== x) {
              if (o) {
                if (h = [], k(d.split(S)), R(), z) return b();
              } else k(d.split(S));
              if (A && A <= c) return h = h.slice(0, A), b(true);
            }
          }
          return b();
        }
        for (var p = i.indexOf(S, j), g = i.indexOf(O, j), _ = new RegExp(M(F) + M(L), "g"), m = i.indexOf(L, j);;) if (i[j] === L) for (m = j, j++;;) {
          if (-1 === (m = i.indexOf(L, m + 1))) return r || u.push({
            type: "Quotes",
            code: "MissingQuotes",
            message: "Quoted field unterminated",
            row: h.length,
            index: j
          }), E();
          if (m === n - 1) return E(i.substring(j, m).replace(_, L));
          if (L === F && i[m + 1] === F) m++;else if (L === F || 0 === m || i[m - 1] !== F) {
            -1 !== p && p < m + 1 && (p = i.indexOf(S, m + 1));
            var y = v(-1 === (g = -1 !== g && g < m + 1 ? i.indexOf(O, m + 1) : g) ? p : Math.min(p, g));
            if (i.substr(m + 1 + y, e) === S) {
              d.push(i.substring(j, m).replace(_, L)), i[j = m + 1 + y + e] !== L && (m = i.indexOf(L, j)), p = i.indexOf(S, j), g = i.indexOf(O, j);
              break;
            }
            y = v(g);
            if (i.substring(m + 1 + y, m + 1 + y + s) === O) {
              if (d.push(i.substring(j, m).replace(_, L)), w(m + 1 + y + s), p = i.indexOf(S, j), m = i.indexOf(L, j), o && (R(), z)) return b();
              if (A && h.length >= A) return b(true);
              break;
            }
            u.push({
              type: "Quotes",
              code: "InvalidQuotes",
              message: "Trailing quote on quoted field is malformed",
              row: h.length,
              index: j
            }), m++;
          }
        } else if (x && 0 === d.length && i.substring(j, j + a) === x) {
          if (-1 === g) return b();
          j = g + s, g = i.indexOf(O, j), p = i.indexOf(S, j);
        } else if (-1 !== p && (p < g || -1 === g)) d.push(i.substring(j, p)), j = p + e, p = i.indexOf(S, j);else {
          if (-1 === g) break;
          if (d.push(i.substring(j, g)), w(g + s), o && (R(), z)) return b();
          if (A && h.length >= A) return b(true);
        }
        return E();
        function k(e) {
          h.push(e), f = j;
        }
        function v(e) {
          var t = 0;
          return t = -1 !== e && (e = i.substring(m + 1, e)) && "" === e.trim() ? e.length : t;
        }
        function E(e) {
          return r || (undefined === e && (e = i.substring(j)), d.push(e), j = n, k(d), o && R()), b();
        }
        function w(e) {
          j = e, k(d), d = [], g = i.indexOf(O, j);
        }
        function b(e) {
          if (C.header && !t && h.length) {
            var s = h[0],
              a = {},
              o = new Set(s);
            var _n = false;
            for (var _r = 0; _r < s.length; _r++) {
              var _i = s[_r];
              if (a[_i = P(C.transformHeader) ? C.transformHeader(_i, _r) : _i]) {
                var _e2 = undefined,
                  _t2 = a[_i];
                for (; _e2 = _i + "_" + _t2, _t2++, o.has(_e2););
                o.add(_e2), s[_r] = _e2, a[_i]++, _n = true, (D = null === D ? {} : D)[_e2] = _i;
              } else a[_i] = 1, s[_r] = _i;
              o.add(_i);
            }
            _n && console.warn("Duplicate headers found and renamed.");
          }
          return {
            data: h,
            errors: u,
            meta: {
              delimiter: S,
              linebreak: O,
              aborted: z,
              truncated: !!e,
              cursor: f + (t || 0),
              renamedHeaders: D
            }
          };
        }
        function R() {
          I(b()), h = [], u = [];
        }
      }, this.abort = function () {
        z = true;
      }, this.getCharIndex = function () {
        return j;
      };
    }
    function g(e) {
      var t = e.data,
        i = o[t.workerId],
        r = false;
      if (t.error) i.userError(t.error, t.file);else if (t.results && t.results.data) {
        var n = {
          abort: function abort() {
            r = true, _(t.workerId, {
              data: [],
              errors: [],
              meta: {
                aborted: true
              }
            });
          },
          pause: m,
          resume: m
        };
        if (P(i.userStep)) {
          for (var s = 0; s < t.results.data.length && (i.userStep({
            data: t.results.data[s],
            errors: t.results.errors,
            meta: t.results.meta
          }, n), !r); s++);
          delete t.results;
        } else P(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
      }
      t.finished && !r && _(t.workerId, t.results);
    }
    function _(e, t) {
      var i = o[e];
      P(i.userComplete) && i.userComplete(t), i.terminate(), delete o[e];
    }
    function m() {
      throw new Error("Not implemented.");
    }
    function w(e) {
      if ("object" != _typeof$2(e) || null === e) return e;
      var t,
        i = Array.isArray(e) ? [] : {};
      for (t in e) i[t] = w(e[t]);
      return i;
    }
    function y(e, t) {
      return function () {
        e.apply(t, arguments);
      };
    }
    function P(e) {
      return "function" == typeof e;
    }
    return v.parse = function (e, t) {
      var i = (t = t || {}).dynamicTyping || false;
      P(i) && (t.dynamicTypingFunction = i, i = {});
      if (t.dynamicTyping = i, t.transform = !!P(t.transform) && t.transform, !t.worker || !v.WORKERS_SUPPORTED) return i = null, v.NODE_STREAM_INPUT, "string" == typeof e ? (e = function (e) {
        return 65279 !== e.charCodeAt(0) ? e : e.slice(1);
      }(e), i = new (t.download ? f : c)(t)) : true === e.readable && P(e.read) && P(e.on) ? i = new p(t) : (n.File && e instanceof File || e instanceof Object) && (i = new l(t)), i.stream(e);
      (i = function () {
        var e;
        return !!v.WORKERS_SUPPORTED && (e = function () {
          var e = n.URL || n.webkitURL || null,
            t = r.toString();
          return v.BLOB_URL || (v.BLOB_URL = e.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", t, ")();"], {
            type: "text/javascript"
          })));
        }(), (e = new n.Worker(e)).onmessage = g, e.id = h++, o[e.id] = e);
      }()).userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = P(t.step), t.chunk = P(t.chunk), t.complete = P(t.complete), t.error = P(t.error), delete t.worker, i.postMessage({
        input: e,
        config: t,
        workerId: i.id
      });
    }, v.unparse = function (e, t) {
      var n = false,
        _ = true,
        m = ",",
        y = "\r\n",
        s = '"',
        a = s + s,
        i = false,
        r = null,
        o = false,
        h = (function () {
          if ("object" == _typeof$2(t)) {
            if ("string" != typeof t.delimiter || v.BAD_DELIMITERS.filter(function (e) {
              return -1 !== t.delimiter.indexOf(e);
            }).length || (m = t.delimiter), "boolean" != typeof t.quotes && "function" != typeof t.quotes && !Array.isArray(t.quotes) || (n = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines), "string" == typeof t.newline && (y = t.newline), "string" == typeof t.quoteChar && (s = t.quoteChar), "boolean" == typeof t.header && (_ = t.header), Array.isArray(t.columns)) {
              if (0 === t.columns.length) throw new Error("Option columns is empty");
              r = t.columns;
            }
            undefined !== t.escapeChar && (a = t.escapeChar + s), t.escapeFormulae instanceof RegExp ? o = t.escapeFormulae : "boolean" == typeof t.escapeFormulae && t.escapeFormulae && (o = /^[=+\-@\t\r].*$/);
          }
        }(), new RegExp(M(s), "g"));
      "string" == typeof e && (e = JSON.parse(e));
      if (Array.isArray(e)) {
        if (!e.length || Array.isArray(e[0])) return u(null, e, i);
        if ("object" == _typeof$2(e[0])) return u(r || Object.keys(e[0]), e, i);
      } else if ("object" == _typeof$2(e)) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || r), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == _typeof$2(e.data[0]) ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == _typeof$2(e.data[0]) || (e.data = [e.data])), u(e.fields || [], e.data || [], i);
      throw new Error("Unable to serialize unrecognized input");
      function u(e, t, i) {
        var r = "",
          n = ("string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t)), Array.isArray(e) && 0 < e.length),
          s = !Array.isArray(t[0]);
        if (n && _) {
          for (var a = 0; a < e.length; a++) 0 < a && (r += m), r += k(e[a], a);
          0 < t.length && (r += y);
        }
        for (var o = 0; o < t.length; o++) {
          var h = (n ? e : t[o]).length,
            u = false,
            d = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
          if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
            for (var f = [], l = 0; l < h; l++) {
              var c = s ? e[l] : l;
              f.push(t[o][c]);
            }
            u = "" === f.join("").trim();
          }
          if (!u) {
            for (var p = 0; p < h; p++) {
              0 < p && !d && (r += m);
              var g = n && s ? e[p] : p;
              r += k(t[o][g], p);
            }
            o < t.length - 1 && (!i || 0 < h && !d) && (r += y);
          }
        }
        return r;
      }
      function k(e, t) {
        var i, r;
        return null == e ? "" : e.constructor === Date ? JSON.stringify(e).slice(1, 25) : (r = false, o && "string" == typeof e && o.test(e) && (e = "'" + e, r = true), i = e.toString().replace(h, a), (r = r || true === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function (e, t) {
          for (var i = 0; i < t.length; i++) if (-1 < e.indexOf(t[i])) return true;
          return false;
        }(i, v.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i);
      }
    }, v.RECORD_SEP = String.fromCharCode(30), v.UNIT_SEP = String.fromCharCode(31), v.BYTE_ORDER_MARK = "\uFEFF", v.BAD_DELIMITERS = ["\r", "\n", '"', v.BYTE_ORDER_MARK], v.WORKERS_SUPPORTED = !s && !!n.Worker, v.NODE_STREAM_INPUT = 1, v.LocalChunkSize = 10485760, v.RemoteChunkSize = 5242880, v.DefaultDelimiter = ",", v.Parser = E, v.ParserHandle = i, v.NetworkStreamer = f, v.FileStreamer = l, v.StringStreamer = c, v.ReadableStreamStreamer = p, n.jQuery && ((d = n.jQuery).fn.parse = function (o) {
      var i = o.config || {},
        h = [];
      return this.each(function (e) {
        if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && n.FileReader) || !this.files || 0 === this.files.length) return true;
        for (var t = 0; t < this.files.length; t++) h.push({
          file: this.files[t],
          inputElem: this,
          instanceConfig: d.extend({}, i)
        });
      }), e(), this;
      function e() {
        if (0 === h.length) P(o.complete) && o.complete();else {
          var e,
            t,
            i,
            r,
            n = h[0];
          if (P(o.before)) {
            var s = o.before(n.file, n.inputElem);
            if ("object" == _typeof$2(s)) {
              if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (P(o.error) && o.error({
                name: e
              }, t, i, r));
              if ("skip" === s.action) return void u();
              "object" == _typeof$2(s.config) && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
            } else if ("skip" === s) return void u();
          }
          var a = n.instanceConfig.complete;
          n.instanceConfig.complete = function (e) {
            P(a) && a(e, n.file, n.inputElem), u();
          }, v.parse(n.file, n.instanceConfig);
        }
      }
      function u() {
        h.splice(0, 1), e();
      }
    }), a && (n.onmessage = function (e) {
      e = e.data;
      undefined === v.WORKER_ID && e && (v.WORKER_ID = e.workerId);
      "string" == typeof e.input ? n.postMessage({
        workerId: v.WORKER_ID,
        results: v.parse(e.input, e.config),
        finished: true
      }) : (n.File && e.input instanceof File || e.input instanceof Object) && (e = v.parse(e.input, e.config)) && n.postMessage({
        workerId: v.WORKER_ID,
        results: e,
        finished: true
      });
    }), (f.prototype = Object.create(u.prototype)).constructor = f, (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(c.prototype)).constructor = c, (p.prototype = Object.create(u.prototype)).constructor = p, v;
  });
})(papaparse_min);
var papaparse_minExports = papaparse_min.exports;
var Papa = /*@__PURE__*/getDefaultExportFromCjs(papaparse_minExports);

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  // biome-ignore lint/complexity/useOptionalChain: <explanation>
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
var EXTENSION_ID = 'webapiExtension';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://tfabworks.github.io/xcx-webapi/dist/webapiExtension.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for WebAPI Client.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    _classCallCheck$1(this, ExtensionBlocks);
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
  return _createClass$1(ExtensionBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: ExtensionBlocks.EXTENSION_ID,
        name: ExtensionBlocks.EXTENSION_NAME,
        extensionURL: ExtensionBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: false,
        blocks: [{
          opcode: 'getWebContents',
          blockType: BlockType$1.REPORTER,
          blockAllThreads: false,
          text: formatMessage({
            id: 'webapiExtension.getWebContents',
            default: 'get data from URL [URL]',
            description: 'get data from URL'
          }),
          func: 'getWebContents',
          arguments: {
            URL: {
              type: ArgumentType$1.STRING,
              defaultValue: 'https://httpbin.org/get'
            }
          }
        }, {
          opcode: 'readStringAsJson',
          blockType: BlockType$1.REPORTER,
          blockAllThreads: false,
          text: formatMessage({
            id: 'webapiExtension.readStringAsJson',
            default: 'value of [QUERY] in JSON data [VALUE]',
            description: 'value of QUERY in JSON data VALUE'
          }),
          func: 'readStringAsJson',
          arguments: {
            QUERY: {
              type: ArgumentType$1.STRING,
              defaultValue: '.headers.Referer'
            },
            VALUE: {
              type: ArgumentType$1.STRING,
              defaultValue: '{}'
            }
          }
        }, {
          opcode: 'parseCsv',
          func: 'parseCsv',
          blockType: BlockType$1.REPORTER,
          blockAllThreads: false,
          text: formatMessage({
            id: 'webapiExtension.parseCsv',
            default: translations.en['webapiExtension.parseCsv'],
            description: translations.en['webapiExtension.parseCsv']
          }),
          arguments: {
            CSV: {
              type: ArgumentType$1.STRING,
              defaultValue: 'A1,B1,C1'
            },
            ROW: {
              type: ArgumentType$1.NUMBER,
              defaultValue: 1
            },
            COL: {
              type: ArgumentType$1.NUMBER,
              defaultValue: 2
            },
            SEP: {
              type: ArgumentType$1.STRING,
              defaultValue: ',',
              menu: 'parseCsv_menu_SEP'
            }
          }
        }],
        menus: {
          'parseCsv_menu_SEP': {
            items: [{
              value: ',',
              text: formatMessage({
                id: 'webapiExtension.parseCsv.sep.comma',
                default: translations.en['webapiExtension.parseCsv.sep.comma']
              })
            }, {
              value: '\t',
              text: formatMessage({
                id: 'webapiExtension.parseCsv.sep.tab',
                default: translations.en['webapiExtension.parseCsv.sep.tab']
              })
            }, {
              value: ' ',
              text: formatMessage({
                id: 'webapiExtension.parseCsv.sep.space',
                default: translations.en['webapiExtension.parseCsv.sep.space']
              })
            }]
          }
        }
      };
    }
  }, {
    key: "getWebContents",
    value: function () {
      var _getWebContents = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(args) {
        var url;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = Cast$1.toString(args.URL);
              _context.next = 3;
              return fetch(url, {
                mode: 'cors',
                headers: {
                  'Accept': 'application/json'
                }
              }).then(function (response) {
                return response.text();
              }).catch(function (e) {
                return '';
              });
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getWebContents(_x) {
        return _getWebContents.apply(this, arguments);
      }
      return getWebContents;
    }()
  }, {
    key: "readStringAsJson",
    value: function readStringAsJson(args) {
      var query = Cast$1.toString(args.QUERY);
      var value = typeof args.VALUE == 'string' ? args.VALUE : Cast$1.toString(args.VALUE);
      var data = '';
      try {
        data = JSON.parse(value);
      } catch (e) {}
      var keys = query.split('.').map(function (s) {
        return s.trim().replace(/^\[/, '').replace(/\]$/, '');
      }).filter(function (s) {
        return s != '';
      });
      var lookup = keys.reduce(function (d, key) {
        switch (_typeof$2(d.value)) {
          case "undefined":
            return d;
          case "object":
            if (d.value === null) {
              return {
                "error": "cannot lookup ".concat(key, " ") + JSON.stringify(d.value, null, 2)
              };
            } else if (Array.isArray(d.value)) {
              var index = key == 'first' ? 0 : key == 'last' ? d.value.length - 1 : parseInt(key.replace(/[０-９]/g, function (m) {
                return '０１２３４５６７８９'.indexOf(m);
              }));
              if (0 <= index && index < d.value.length) {
                return {
                  "value": d.value[index]
                };
              } else {
                return {
                  "error": "invalid index ".concat(index, " length ").concat(d.value.length)
                };
              }
            } else {
              if (typeof d.value[key] !== 'undefined') {
                return {
                  "value": d.value[key]
                };
              } else {
                return {
                  "error": "cannot lookup ".concat(key, " ") + JSON.stringify(d.value, null, 2)
                };
              }
            }
          default:
            return {
              "error": "cannot lookup ".concat(key, " ") + JSON.stringify(d.value, null, 2)
            };
        }
      }, {
        "value": data
      });
      if (typeof lookup.error != 'undefined') {
        //log.log(lookup.error);
        return '';
      } else {
        switch (_typeof$2(lookup.value)) {
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

    /**
     * Parse CSV data.
     * @param {object} args - arguments
     * @param {string|Array<string|Array<string>>} args.CSV - CSV data
     * @param {number} args.ROW - row number
     * @param {number} args.COL - column number
     * @param {string} args.SEP - separator
     * @param {object} util - utility object
     * @returns {string} - parsed CSV data
     */
  }, {
    key: "parseCsv",
    value: function parseCsv(args, util) {
      var csvInput = args.CSV;
      var row = Math.floor(Math.max(1, Cast$1.toNumber(args.ROW)));
      var col = Math.floor(Math.max(1, Cast$1.toNumber(args.COL)));
      var sep = Cast$1.toString(args.SEP);
      var lines = null;
      // まず行に分割する
      if (Array.isArray(csvInput)) {
        // 配列の場合はそのまま
        lines = csvInput;
      } else {
        var csvString = Cast$1.toString(csvInput);
        // JSON文字列ぽい場合はパースを試す
        if (/^\[[^]*\]$/.test(csvString.trim())) {
          try {
            var json = JSON.parse(csvString);
            if (Array.isArray(json)) {
              lines = json;
            }
          } catch (e) {
            // 無視
          }
        }
        if (lines === null) {
          lines = csvString.split(/(?:\r\n|\r|\n)/);
        }
      }
      // ターゲット行を取得
      if (typeof lines[row - 1] === 'undefined') {
        return '';
      }
      var line = lines[row - 1];
      // ターゲット行をパース
      var cols = [];
      if (Array.isArray(line)) {
        cols.push.apply(cols, _toConsumableArray(line));
      } else {
        var lineString = Cast$1.toString(line);
        try {
          var parsed = Papa.parse(lineString, {
            header: false,
            delimiter: sep
          });
          if (parsed.errors.length > 0) {
            return new Error(parsed.errors[0].message, {
              cause: parsed.errors
            });
          }
          if (parsed.data.length > 0) {
            cols.push.apply(cols, _toConsumableArray(parsed.data[0]));
          }
        } catch (e) {
          console.error(e);
          return e;
        }
      }
      // ターゲット列の値を取得
      if (typeof cols[col - 1] === 'undefined') {
        return '';
      }
      var value = cols[col - 1];
      return value;
    }
  }], [{
    key: "formatMessage",
    set:
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    function set(formatter) {
      formatMessage = formatter;
      if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
  }, {
    key: "EXTENSION_NAME",
    get: function get() {
      return formatMessage({
        id: 'webapiExtension.name',
        default: 'WebAPI Client',
        description: 'name of the extension'
      });
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */,
    set: function set(url) {
      extensionURL = url;
    }
  }]);
}();

export { ExtensionBlocks as blockClass, entry };
//# sourceMappingURL=webapiExtension.mjs.map
