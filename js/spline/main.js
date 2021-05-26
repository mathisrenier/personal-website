
			const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

			const app = new SpeRuntime.Application();

			if(vw < 600) {
				app.start('./js/scene-phone.json');
			}
			else {
				app.start('./js/scene-desktop.json');
			}
        