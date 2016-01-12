/**
 * 
 */
$(function(){
	$('body').on('bvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '30%', height: '74px',
					top: '28%', left: '52.5%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '2%', left: '-9%'
				},
				next: {
					width: '0%', height: '0%',
					top: '2%', right: '-9%'
				},
				list: {
					width: '95%', height: '16%',
					top: '7%', left: '5px'
				},
				imgSelector: {
					width: '18px', height: '34px',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '207px', height: '28px',
					top: '110%', left: '2px'
				},
			},
			albums: {
				css: { 
					width: '33.5%', height: '156px',
					top: '25%', left: '11%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '23%', left: '10%'
				},
				next: {
					width: '0%', height: '0%',
					top: '23%', right: '12%'
				},
				list: {
					width: '100px', height: '100px',
					top: '10%', left: '65px'
				},
				marquee : { 
					width: '200px', height: '20px',
					top: '80%', left: '7%',
				},
			},
			sliderType : 'simple',
			skin: 'bvplayer',
			volumeType: 'Rot',
		});
		setDefaultSkinValues('bvplayer','Rot');
	})
})

