/*
 * MAINSCENE.JS
 */


function MainScene(window, game) {

	/*
	 * DECLARING THE SCENE
	 */

	var self = platino.createScene();
	self.addEventListener('activated', onSceneActivated);
	self.addEventListener('deactivated', onSceneDeactivated);	


	/*
	 * SCENE ACTIVATED LISTENER
	 */
	
	function onSceneActivated(e) {
		
	// WHEN SCENE IS ACTIVATED, STARTS THE CREATION OF ALL OBJECTS
	
		game.startCurrentScene();			
			
	};
	
	function onSceneDeactivated(e) {
		
	// WHEN SCENE IS DEACTIVATED, ALL INSTANCES AND TEXTURES ARE REMOVED.
	   
	
	};
	    
	    
	    
	return self;

};


module.exports = MainScene;


