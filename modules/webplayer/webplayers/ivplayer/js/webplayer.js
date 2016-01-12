/**
 * 
 */
$(function(){

	$('body').on('ivplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '49%', height: '54px',
					top: '40%', left: '24.5%'
				},
				prev: {
					width: '11%', height: '60%',
					top: '11%', left: '-5.6%'
				},
				next: {
					width: '11%', height: '60%',
					top: '11%', right: '-8%'
				},
				list: {
					width: '96%', height: '39%',
					top: '10px', left: '7px'
				},
				imgSelector: {
					width: '18px', height: '16px',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '39%', height: '50px',
					top: '-128%', left: '106%',
				}
			},
			albums: {
				css: { 
					width: '50%', height: '140px',
					top: '8%', left: '24%'
				},
				prev: {
					width: '15%', height: '83%',
					top: '13%', left: '1%'
				},
				next: {
					width: '15%', height: '83%',
					top: '13%', right: '1%'
				},
				list: {
					width: '200px', height: '100px',
					top: '13px', left: '76px'
				},
				marquee : { 
					width: '203px', height: '20px',
					top: '83%', left: '22%'
				},
			},
			sliderType : 'doble',
			skin: 'ivplayer',
			volumeType: 'Rot',

		});
		setDefaultSkinValues();
	})
})
	

