$(function(){
	var jarallax = new Jarallax();
	
	jarallax.setDefault('#main-paper-bg', {display:'none'});
	jarallax.setDefault('#main-dot-face', {display:'none'});
	jarallax.setDefault('#transition-bg', {display:'none'});
	
	jarallax.setDefault('#TenPercentHuman', {display:'none'});
	
	
	
	jarallax.setDefault('#cellSize', {display:'none'});
	jarallax.setDefault('#bacteriaSize', {display:'none'});
	jarallax.setDefault('#cellSizeP', {display:'none'});
	jarallax.setDefault('#bacteriaSizeP', {display:'none'});
	jarallax.setDefault('#human-paper-bg', {display:'none'});
	jarallax.setDefault('#human-paper-data-wrapper', {display:'none'});
	jarallax.setDefault('#enlargeBacteria', {display:'none'});
	
	jarallax.setDefault('#amountPage', {display:'none'});
	jarallax.setDefault('#sizePage', {display:'none'});
	jarallax.setDefault('#diversityPage', {display:'none'});
	jarallax.setDefault('#locPage', {display:'none'});
	
	

	jarallax.addAnimation('#main-paper-bg', 
						   [{progress:'0%', top: '0%', display:'block', opacity:'1'},
						   {progress:'20%', top: '0%', display:'block', opacity:'1'},//hold
						   {progress:'30%', top: '-110%', display:'block', opacity:'1'},//fly off
						   {progress:'100%', top: '-110%', opacity:'0'}]);
	
	jarallax.addAnimation('#TenPercentHuman', 
						   [{progress:'0%', top: '0%', display:'block', opacity:'1'},
						   {progress:'5%', top: '0%', display:'block', opacity:'1'},
						   {progress:'10%', top: '0%', display:'block', opacity:'0'},
						   {progress:'10%', top: '0%'},
						   {progress:'100%', top: '0%'}]);

/****** INTRO face ******/						   	
	jarallax.addAnimation('#main-line-face', 
						   [{progress:'0%', top: '0%', opacity:'1', display:'block'},
						   {progress:'12%', top: '0%', opacity:'0', display:'block'},//start fading away
						   {progress:'20%', top: '0%', opacity:'0', display:'block'},//should be seeing dot face
						   {progress:'35%', top: '0%', opacity:'0'},
						   {progress:'100%', top: '0%', opacity:'0'}]);
						   	
	jarallax.addAnimation('#main-dot-face', 
						   [{progress:'0%', top: '0%', opacity:'0', display:'block', width:'405px', marginLeft:'260px', marginTop:'120px'},
						   {progress:'10%', top: '0%', opacity:'1', display:'block', width:'405px', marginLeft:'260px', marginTop:'120px'},//start showing
						   {progress:'40%', top: '0%', opacity:'1', display:'block', width:'800px', marginLeft:'0px', marginTop:'0px'},//hold
						   {progress:'41%', top: '0%', opacity:'0', width:'800px', marginLeft:'0px', marginTop:'0px'},//fly off
						   {progress:'100%', top: '0%', opacity:'0', width:'800px', marginLeft:'0px', marginTop:'0px'}]);
						   
	jarallax.addAnimation('#enlargeBacteria', 
						   [{progress:'0%', top: '300px', left:'792px', opacity:'0', display:'block', width:'0px', height:'0px'},
						   {progress:'30%', top: '300px', left:'792px', opacity:'0', display:'block', width:'20px', height:'20px'},//start showing
						   {progress:'31%', top: '300px', left:'792px', opacity:'1', display:'block', width:'20px', height:'20px'},//start showing
						   {progress:'40%', top: '0px', left:'345px', opacity:'1', display:'block', width:'1000px', height:'1000px'},//hold
						   {progress:'41%', top: '0px', left:'345px', opacity:'0', width:'1000px', height:'1000px'},//hold
						   {progress:'100%', top: '0px', left:'345px', opacity:'0', width:'1000px', height:'1000px'}]);

	jarallax.addAnimation('#transition-bg', 
						   [{progress:'0%', top: '0%', opacity:'0'},
						   {progress:'34%', top: '0%', opacity:'0', display:'block'},
						   {progress:'38%', top: '0%', opacity:'1', display:'block'},//start showing
						   {progress:'46%', top: '0%', opacity:'1', display:'block'},
						   {progress:'49%', top: '0%', opacity:'0', display:'block'},
						   {progress:'100%', top: '0%', opacity:'0', display:'block'}]);



/****** TABS ******/		
	jarallax.addAnimation('#amountPage', 
						   [{progress:'0%', top: '30%', left: '10%', opacity:'0'},
						   {progress:'34%', top: '30%', left: '10%', opacity:'0'},
						   {progress:'38%', top: '30%', left: '10%', opacity:'0'},
						   {progress:'47%', top: '30%', left: '10%', opacity:'1', display:'block'},//start showing
						   {progress:'100%', top: '30%', left: '10%', opacity:'1', display:'block'}]);
	
	jarallax.addAnimation('#sizePage', 
						   [{progress:'0%', top: '30%', left: '30%', opacity:'0'},
						   {progress:'34%', top: '30%', left: '30%', opacity:'0'},
						   {progress:'38%', top: '30%', left: '30%', opacity:'0'},
						   {progress:'47%', top: '30%', left: '30%', opacity:'1', display:'block'},//start showing
						   {progress:'100%', top: '30%', left: '30%', opacity:'1', display:'block'}]);

	jarallax.addAnimation('#diversityPage', 
						   [{progress:'0%', top: '30%', left: '50%', opacity:'0'},
						   {progress:'34%', top: '30%', left: '50%', opacity:'0'},
						   {progress:'38%', top: '30%', left: '50%', opacity:'0'},
						   {progress:'47%', top: '30%', left: '50%', opacity:'1', display:'block'},//start showing
						   {progress:'100%', top: '30%', left: '50%', opacity:'1', display:'block'}]);

	jarallax.addAnimation('#locPage', 
						   [{progress:'0%', top: '30%', left: '70%', opacity:'0'},
						   {progress:'34%', top: '30%', left: '70%', opacity:'0'},
						   {progress:'38%', top: '30%', left: '70%', opacity:'0'},
						   {progress:'47%', top: '30%', left: '70%', opacity:'1', display:'block'},//start showing
						   {progress:'100%', top: '30%', left: '70%', opacity:'1', display:'block'}]);












/****** SIZE ******/	
	jarallax.addAnimation('#cellSize', 
						   [{progress:'0%', top: '-100%', marginLeft: '500px', display:'block'},
						   {progress:'10%', top: '0%', marginLeft: '272px', display:'block'},
						   {progress:'20%', top: '0%', marginLeft: '272px', display:'block'},//hold
						   {progress:'35%', top: '-120%', marginLeft: '272px', display:'block'},//fly off
						   {progress:'100%', top: '-120%', marginLeft: '272px', display:'block'}]);
	
	jarallax.addAnimation('#bacteriaSize', 
						   [{progress:'0%', top: '20%', marginLeft: '0px', display:'block'},
						   {progress:'10%', top: '0%', marginLeft: '329px', display:'block'},
						   {progress:'20%', top: '0%', marginLeft: '329px', display:'block'},//hold
						   {progress:'35%', top: '-200%', marginLeft: '329px', display:'block'},//fly off
						   {progress:'100%', top: '-100%', marginLeft: '329px', display:'block'}]);
						   
	jarallax.addAnimation('#sizeP', 
						   [{progress:'0%', top: '20%', marginLeft: '130px', display:'block', opacity:'0'},
						   {progress:'10%', top: '0%', marginLeft: '130px', display:'block', opacity:'1'},
						   {progress:'20%', top: '0%', marginLeft: '130px', display:'block', opacity:'1'},//hold
						   {progress:'35%', top: '-100%', marginLeft: '130px', display:'block', opacity:'1'},//fly off
						   {progress:'100%', top: '-100%', marginLeft: '130px', display:'block', opacity:'1'}]);
	
	jarallax.addAnimation('#cellSizeP', 
						   [{progress:'0%', top: '0%', marginLeft: '720px', display:'block', opacity:'0'},
						   {progress:'5%', top: '0%', marginLeft: '720px', display:'block', opacity:'0'},
						   {progress:'10%', top: '0%', marginLeft: '690px', display:'block', opacity:'1'},
						   {progress:'20%', top: '0%', marginLeft: '690px', display:'block', opacity:'1'},//hold
						   {progress:'35%', top: '-150%', marginLeft: '690px', display:'block', opacity:'1'},//fly off
						   {progress:'100%', top: '-150%', marginLeft: '690px', display:'block', opacity:'1'}]);
	
	jarallax.addAnimation('#bacteriaSizeP', 
						   [{progress:'0%', top: '0%', marginLeft: '130px', display:'block', opacity:'0'},
						   {progress:'5%', top: '0%', marginLeft: '130px', display:'block', opacity:'0'},
						   {progress:'10%', top: '0%', marginLeft: '145px', display:'block', opacity:'1'},
						   {progress:'20%', top: '0%', marginLeft: '145px', display:'block', opacity:'1'},//hold
						   {progress:'35%', top: '-130%', marginLeft: '145px', display:'block', opacity:'1'},//fly off
						   {progress:'100%', top: '-100%', marginLeft: '145px', display:'block', opacity:'1'}]);
						   
	jarallax.addAnimation('#human-paper-bg', 
						   [{progress:'0%', top: '0%', opacity:'0'},
						   {progress:'20%', top: '100%', display:'block', opacity:'1'},//bf come in
						   {progress:'30%', top: '0%', display:'block', opacity:'1'},//come in
						   {progress:'100%', top: '0%', display:'block', opacity:'1'}]);			
						   
	jarallax.addAnimation('#human-paper-data-wrapper', 
						   [{progress:'0%', top: '0%', opacity:'0'},
						   {progress:'20%', top: '100%', display:'block', opacity:'1'},//bf come in
						   {progress:'30%', top: '0%', display:'block', opacity:'1'},//come in
						   {progress:'100%', top: '0%', display:'block', opacity:'1'}]);					   
});

