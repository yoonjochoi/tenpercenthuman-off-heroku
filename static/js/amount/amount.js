// @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
			
			var statsEnabled = true;
			var container, stats;
			var $newdiv1;
			var camera, scene, renderer;
			var objects;
			var mesh, zmesh, lightMesh, geometry;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			
			var projector = new THREE.Projector();
			
			// activate Drag Controls
/* 			var dragcontrols = new THREE.DragControls(camera, scene, renderer.domElement);  */

			init();
			animate(); // render is being called inside animate

			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
				camera.position.z = 3200;

				scene = new THREE.Scene();
				scene.fog = new THREE.Fog( 0x000000, 1, 20000 );

				scene.add( new THREE.AmbientLight( 0x555555 ) );
				
				objects=[];

				var light = new THREE.PointLight( 0xffffff );
				scene.add( light );


				var shader = THREE.BasicShader;
				var uniforms = shader.uniforms;
				var vertexShader = shader.vertexShader;
				var fragmentShader = shader.fragmentShader;
				var texture1 = new THREE.Texture( generateTexture( 0, 0.5, 1 ), new THREE.UVMapping() );
				var texture2 = new THREE.Texture( generateTexture( 0, 1, 0 ), new THREE.SphericalReflectionMapping() );
				var texture3 = THREE.ImageUtils.loadTexture( '../static/img/texture/oilpastel1.jpg' )
				var texture4 = THREE.ImageUtils.loadTexture( '../static/img/texture/oilpastel2-3.jpg' )
				var texture5 = THREE.ImageUtils.loadTexture( '../static/img/texture/oilpastel3.jpg' )
				var texture6 = THREE.ImageUtils.loadTexture( '../static/img/texture/oilpastel4.jpg' )

				texture1.needsUpdate = true;
				texture2.needsUpdate = true;

				var materials = [
					new THREE.MeshBasicMaterial( { map: texture3 } ), //image mapped to sphere
					new THREE.MeshBasicMaterial( { map: texture4 } ), //image mapped to sphere
					new THREE.MeshBasicMaterial( { map: texture5 } ), //image mapped to sphere
					new THREE.MeshBasicMaterial( { map: texture6 } ), //image mapped to sphere					
/* 					new THREE.MeshLambertMaterial( { map: texture6 } ), // mapped image on sphere but light lit from center */
				];

//#1. mint				
				//creating Geometries	
				var geometries = [];
				for ( var i = 0, l = materials.length; i < l; i ++ ) {
					var geometry = new THREE.SphereGeometry( 70, 70, 70 ); //radius, segmentsWidth, segmentsHeight
					geometries.push( geometry );
				}//end for

				//creating Meshes
				for ( var i = 0; i < 2000; i ++ ) {
					// random order -- very close up
/*					var index = Math.floor( Math.random() * materials.length );*/

					// sort by material / geometry
					//-- middle close 
/* 					var index = Math.floor( ( i / 5000 ) * materials.length ); */
					var index = Math.floor( ( i / 5000 ));

					var material = materials[ 0 ];
					var geometry = geometries[ 0 ];

					var mesh = new THREE.Mesh( geometry, material );

					mesh.position.x = Math.random() * 10000 - 5000;
					mesh.position.y = Math.random() * 10000 - 5000;
					mesh.position.z = Math.random() * 10000 - 5000;

					mesh.rotation.x = Math.random() * 2 * Math.PI;
					mesh.rotation.y = Math.random() * 2 * Math.PI;

					mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 4 + 1;
					
					objects.push(mesh);
					
					scene.add( mesh );
				}//end for

//#2 green			
				//creating Geometries	
				var geometries = [];
				for ( var i = 0, l = materials.length; i < l; i ++ ) {
					var geometry = new THREE.SphereGeometry( 10, 10, 10 ); //radius, segmentsWidth, segmentsHeight
					geometries.push( geometry );
				}//end for

				//creating Meshes
				for ( var i = 0; i < 1000; i ++ ) {
					// sort by material / geometry
					var index = Math.floor( ( i / 5000 ) * materials.length );

					var material = materials[ 1 ];
					var geometry = geometries[ 1 ];

					var mesh = new THREE.Mesh( geometry, material );

					mesh.position.x = Math.random() * 10000 - 5000;
					mesh.position.y = Math.random() * 10000 - 5000;
					mesh.position.z = Math.random() * 10000 - 5000;

					mesh.rotation.x = Math.random() * 2 * Math.PI;
					mesh.rotation.y = Math.random() * 2 * Math.PI;

					mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 4 + 1;
					
					objects.push(mesh);
					scene.add( mesh );
				}//end for
				
//#3 pink				
				//creating Geometries	
				var geometries = [];
				for ( var i = 0, l = materials.length; i < l; i ++ ) {
					var geometry = new THREE.SphereGeometry( 50, 50, 50 ); //radius, segmentsWidth, segmentsHeight
					geometries.push( geometry );
				}//end for

				//creating Meshes
				for ( var i = 0; i < 2500; i ++ ) {
					// sort by material / geometry
					var index = Math.floor( ( i / 5000 ) * materials.length );

					var material = materials[ 2 ];
					var geometry = geometries[ 2 ];

					var mesh = new THREE.Mesh( geometry, material );

					
					mesh.position.x = Math.random() * 10000 - 5000;
					mesh.position.y = Math.random() * 10000 - 5000;
					mesh.position.z = Math.random() * 10000 - 5000;
					
					mesh.rotation.x = Math.random() * 2 * Math.PI;
					mesh.rotation.y = Math.random() * 2 * Math.PI;

					mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 4 + 1;
					
					objects.push(mesh);
					scene.add( mesh );
				}//end for
				
//#4 orange		
				//creating Geometries	
				var geometries = [];
				for ( var i = 0, l = materials.length; i < l; i ++ ) {
					var geometry = new THREE.SphereGeometry( 30, 30, 30 ); //radius, segmentsWidth, segmentsHeight
					geometries.push( geometry );
				}//end for

				//creating Meshes
				for ( var i = 0; i < 2500; i ++ ) {
					// sort by material / geometry
					var index = Math.floor( ( i / 5000 ) * materials.length );

					var material = materials[ 3 ];
					var geometry = geometries[ 3 ];

					var mesh = new THREE.Mesh( geometry, material );

					
					mesh.position.x = Math.random() * 10000 - 5000;
					mesh.position.y = Math.random() * 10000 - 5000;
					mesh.position.z = Math.random() * 10000 - 5000;
					
					mesh.rotation.x = Math.random() * 2 * Math.PI;
					mesh.rotation.y = Math.random() * 2 * Math.PI;

					mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 4 + 1;
					
					objects.push(mesh);
					scene.add( mesh );
				}//end for
				
				
				
				//render
				renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.sortObjects = false;

				container.appendChild( renderer.domElement );
							
				//adding trackball controls - navigate with mouse and zoom
				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.target.set( 0, 120, 0 );

				controls.rotateSpeed = 1.0;
				controls.zoomSpeed = 0.2;
				controls.panSpeed = 0.8;

				controls.noZoom = false;
				controls.noPan = false;

				controls.staticMoving = true;
				controls.dynamicDampingFactor = 0.15;
				controls.keys = [ 65, 83, 68 ];
				
				// panning scene with mouse
				if ( statsEnabled ) {
					stats = new Stats();
					stats.domElement.style.position = 'absolute';
					stats.domElement.style.top = '0px';
					stats.domElement.style.zIndex = 100;
					container.appendChild( stats.domElement );
				}//end if

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				window.addEventListener( 'resize', onWindowResize, false );
			} //end init

			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );
				controls.handleResize();
			}//end onWindowResize


			function generateTexture( r, g, b ) {
				var canvas = document.createElement( 'canvas' );
				canvas.width = 256;
				canvas.height = 256;
				var context = canvas.getContext( '2d' );
				var image = context.getImageData( 0, 0, 256, 256 );
				var x = 0, y = 0, p;

				for ( var i = 0, j = 0, l = image.data.length; i < l; i += 4, j ++ ) {
					x = j % 256;
					y = x == 0 ? y + 1 : y;
					p = Math.floor( x ^ y );

					image.data[ i ] = ~~ p * r;
					image.data[ i + 1 ] = ~~ p * g;
					image.data[ i + 2 ] = ~~ p * b;
					image.data[ i + 3 ] = 255;
				}//end for

				context.putImageData( image, 0, 0 );
				return canvas;
			}//end generateTexture

			function onDocumentMouseMove(event) {
				mouseX = ( event.clientX - windowHalfX ) * 10;
				mouseY = ( event.clientY - windowHalfY ) * 10;
			}//end onDocumentMouseMove

			function animate() {
				requestAnimationFrame( animate );
				update();
				render();
				if ( statsEnabled ) stats.update();
			}//end animate

			function update(){
				var vector = new THREE.Vector3( mouseX, mouseY, 1 );
				projector.unprojectVector( vector, camera );

				var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
				var intersects = ray.intersectObjects( scene.children );

				if ( intersects.length > 0 ) {
				
					//when there is a change append child and change information.
					console.log(intersects[0].object);
/* 					console.log(mouseX, mouseY) */

					$('#bacteria-name').html(intersects[0].object.id);

					// Code to move the info box
					$('#info').css({
/* 						top: mouseY+"px", */
/* 						left: mouseX+"px" */
					})
					
/* 					$newdiv1 = document.createElement('div'); */
/* 					document.body.appendChild($newdiv1);				 */
			
				} 
			}//end update

			function render() {
				controls.update();
				/*camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;*/
				camera.lookAt( scene.position );
				
				//adding rotation & movement to meshes
				for (var i = 0; i < 2000; i++){
					objects[i].rotation.x +=0.04;
					objects[i].rotation.y += 0.03;
					
/* 					objects[i].position.y = Math.sin( object.rotation.x ) * 200 + 200; */
/*					objects[i].position.x += 5;
					objects[i].position.y += 2;*/
					objects[i].position.x = objects[i].position.x + Math.random();
					objects[i].position.y = objects[i].position.y + Math.random();
				}
				

				for (var i = 2000; i<3000; i++){
					objects[i].rotation.x +=0.01;
					objects[i].rotation.y += 0.02;
					objects[i].position.x = objects[i].position.x + Math.random();
					objects[i].position.y = objects[i].position.y + Math.random();
				}
				
				for (var i = 3000; i<5500; i++){
					objects[i].rotation.x +=0.01;
					objects[i].rotation.y += 0.02;
					objects[i].position.x = objects[i].position.x + Math.random();
					objects[i].position.y = objects[i].position.y + Math.random();
				}
				
				for (var i = 5500; i<8000; i++){
					objects[i].rotation.x +=0.01;
					objects[i].rotation.y += 0.02;
					objects[i].position.x = objects[i].position.x + Math.random();
					objects[i].position.y = objects[i].position.y + Math.random();
				}

				
				renderer.render( scene, camera );
			}
