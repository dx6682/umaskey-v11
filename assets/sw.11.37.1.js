/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/app/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/common/scripts/compose-notification.ts":
/*!***************************************************************!*\
  !*** ./src/client/app/common/scripts/compose-notification.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _misc_get_note_summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../misc/get-note-summary */ "./src/misc/get-note-summary.ts");
/* harmony import */ var _misc_get_reaction_emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../misc/get-reaction-emoji */ "./src/misc/get-reaction-emoji.ts");
/* harmony import */ var _misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../misc/get-user-name */ "./src/misc/get-user-name.ts");



// TODO: i18n
/* harmony default export */ __webpack_exports__["default"] = (function (type, data) {
    switch (type) {
        case 'driveFileCreated':
            return {
                title: 'File uploaded',
                body: data.name,
                icon: data.url
            };
        case 'unreadMessagingMessage':
            return {
                title: `New message from ${Object(_misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__["default"])(data.user)}`,
                body: data.text,
                icon: data.user.avatarUrl
            };
        case 'reversiInvited':
            return {
                title: 'Play reversi with me',
                body: `You got reversi invitation from ${Object(_misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__["default"])(data.parent)}`,
                icon: data.parent.avatarUrl
            };
        case 'notification':
            switch (data.type) {
                case 'mention':
                    return {
                        title: `${Object(_misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__["default"])(data.user)}:`,
                        body: Object(_misc_get_note_summary__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
                        icon: data.user.avatarUrl
                    };
                case 'reply':
                    return {
                        title: `You got reply from ${Object(_misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__["default"])(data.user)}:`,
                        body: Object(_misc_get_note_summary__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
                        icon: data.user.avatarUrl
                    };
                case 'quote':
                    return {
                        title: `${Object(_misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__["default"])(data.user)}:`,
                        body: Object(_misc_get_note_summary__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
                        icon: data.user.avatarUrl
                    };
                case 'reaction':
                    return {
                        title: `${Object(_misc_get_user_name__WEBPACK_IMPORTED_MODULE_2__["default"])(data.user)}: ${Object(_misc_get_reaction_emoji__WEBPACK_IMPORTED_MODULE_1__["default"])(data.reaction)}:`,
                        body: Object(_misc_get_note_summary__WEBPACK_IMPORTED_MODULE_0__["default"])(data.note),
                        icon: data.user.avatarUrl
                    };
                default:
                    return null;
            }
        default:
            return null;
    }
});


/***/ }),

/***/ "./src/client/app/sw.js":
/*!******************************!*\
  !*** ./src/client/app/sw.js ***!
  \******************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_scripts_compose_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/scripts/compose-notification */ "./src/client/app/common/scripts/compose-notification.ts");
/**
 * Service Worker
 */



// eslint-disable-next-line no-undef
const version = "11.37.1";
const cacheName = `mk-cache-${version}`;

const apiUrl = `${location.origin}/api/`;

// インストールされたとき
self.addEventListener('install', ev => {
	console.info('installed');

  ev.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				return cache.addAll([
					"/",
					`/assets/desktop.${version}.js`,
					`/assets/mobile.${version}.js`,
					"/assets/error.jpg"
				]);
			})
			.then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
	ev.waitUntil(
		caches.keys()
			.then(cacheNames => Promise.all(
				cacheNames
					.filter((v) => v !== cacheName)
					.map(name => caches.delete(name))
			))
			.then(() => self.clients.claim())
	);
});

// self.addEventListener('fetch', ev => {
// 	if (ev.request.method !== 'GET' || ev.request.url.startsWith(apiUrl)) return;
// 	ev.respondWith(
// 		caches.match(ev.request)
// 			.then(response => {
// 				return response || fetch(ev.request);
// 			})
// 			.catch(() => {
// 				return caches.match("/");
// 			})
// 	);
// });

// プッシュ通知を受け取ったとき
self.addEventListener('push', ev => {
	// クライアント取得
	ev.waitUntil(self.clients.matchAll({
		includeUncontrolled: true
	}).then(clients => {
		// クライアントがあったらストリームに接続しているということなので通知しない
		if (clients.length != 0) return;

		const { type, body } = ev.data.json();

		const n = Object(_common_scripts_compose_notification__WEBPACK_IMPORTED_MODULE_0__["default"])(type, body);
		return self.registration.showNotification(n.title, {
			body: n.body,
			icon: n.icon,
		});
	}));
});


/***/ }),

/***/ "./src/misc/get-note-summary.ts":
/*!**************************************!*\
  !*** ./src/misc/get-note-summary.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 投稿を表す文字列を取得します。
 * @param {*} note (packされた)投稿
 */
const summarize = (note) => {
    if (note.deletedAt) {
        return '(削除された投稿)';
    }
    if (note.isHidden) {
        return '(非公開の投稿)';
    }
    let summary = '';
    // 本文
    if (note.cw != null) {
        summary += note.cw;
    }
    else {
        summary += note.text ? note.text : '';
    }
    // ファイルが添付されているとき
    if ((note.files || []).length != 0) {
        summary += ` (${note.files.length}つのファイル)`;
    }
    // 投票が添付されているとき
    if (note.poll) {
        summary += ' (投票)';
    }
    // 返信のとき
    if (note.replyId) {
        if (note.reply) {
            summary += `\n\nRE: ${summarize(note.reply)}`;
        }
        else {
            summary += '\n\nRE: ...';
        }
    }
    // Renoteのとき
    if (note.renoteId) {
        if (note.renote) {
            summary += `\n\nRN: ${summarize(note.renote)}`;
        }
        else {
            summary += '\n\nRN: ...';
        }
    }
    return summary.trim();
};
/* harmony default export */ __webpack_exports__["default"] = (summarize);


/***/ }),

/***/ "./src/misc/get-reaction-emoji.ts":
/*!****************************************!*\
  !*** ./src/misc/get-reaction-emoji.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (reaction) {
    switch (reaction) {
        case 'like': return '👍';
        case 'love': return '❤️';
        case 'laugh': return '😆';
        case 'hmm': return '🤔';
        case 'surprise': return '😮';
        case 'congrats': return '🎉';
        case 'angry': return '💢';
        case 'confused': return '😥';
        case 'rip': return '😇';
        case 'pudding': return '🍮';
        case 'star': return '⭐';
        default: return reaction;
    }
});


/***/ }),

/***/ "./src/misc/get-user-name.ts":
/*!***********************************!*\
  !*** ./src/misc/get-user-name.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (user) {
    return user.name || user.username;
});


/***/ })

/******/ });
//# sourceMappingURL=sw.11.37.1.js.map