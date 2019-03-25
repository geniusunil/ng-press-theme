export const environment = {
  production: false
};

const appConfig = {
	"app": {
		"title": "Xo for Angular",
		"url": "http://localhost",
		"version": "0.1.2",
		"debug": true
	},
	"paths": {
		"apiUrl": "http://localhost/xo-api/",
		"templateUrl": "http://localhost/wp-content/themes/angularPress/"
	}
};

window['appConfig'] = appConfig;