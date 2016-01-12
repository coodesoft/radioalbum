/**
 * 
 */
$(function(){

	$('body').on('fvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '54%', height: '40px',
					top: '74%', left: '9%'
				},
				prev: {
					width: '6%', height: '60%',
					top: '27%', left: '1%'
				},
				next: {
					width: '6%', height: '60%',
					top: '27%', right: '1%'
				},
				list: {
					width: '92%', height: '43%',
					top: '13px', left: '13px'
				},
				imgSelector: {
					width: '18px', height: '100%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '59%', height: '28px',
					top: '162%', left: '53%',
				},
			},
			albums: {
				css: { 
					width: '47%', height: '228px',
					top: '12%', left: '11%'
				},
				prev: {
					width: '25%', height: '46%',
					top: '32%', left: '2%'
				},
				next: {
					width: '25%', height: '46%',
					top: '32%', right: '2%'
				},
				list: {
					width: '175px', height: '175px',
					top: '31px', left: '74px'
				},
				marquee : { 
					width: '219px', height: '20px',
					top: '91%', left: '16%', 
				},
			},
			sliderType : 'simple',
			skin: 'fvplayer',
			volumeType: 'Hor',
		});
		setDefaultSkinValues();
	})
})