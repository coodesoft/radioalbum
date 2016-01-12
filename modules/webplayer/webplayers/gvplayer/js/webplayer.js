/**
 * 
 */
$(function(){

	$('body').on('gvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '83%', height: '41px',
					top: '56%', left: '6.5%'
				},
				prev: {
					width: '7%', height: '100%',
					top: '0%', left: '-1%'
				},
				next: {
					width: '7%', height: '100%',
					top: '0%', right: '41%'
				},
				list: {
					width: '45.5%', height: '47%',
					top: '7px', left: '36px'
				},
				imgSelector: {
					width: '17px', height: '100%',
					top: '4px', left: '9px'
				},
				elementInfo : {
					width: '35%', height: '32px',
					top: '5px', left: '59%',
				}
			},
			albums: {
				css: { 
					width: '83%', height: '206px',
					top: '10%', left: '7%'
				},
				prev: {
					width: '11%', height: '29%',
					top: '33%', left: '3%'
				},
				next: {
					width: '11%', height: '29%',
					top: '33%', right: '3%'
				},
				list: {
					width: '320px', height: '160px',
					top: '14px', left: '118px'
				},
				marquee : { 
					width: '317px', height: '20px',
					top: '88%', left: '21%',
				},
			},
			sliderType : 'doble',
			skin: 'gvplayer',
			volumeType: 'Rot',
		});
		setDefaultSkinValues();
	})
})
