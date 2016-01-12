
//codigo para el editor de paginas estaticas, es el mismo codigo que esta en el ejemplo de la
//documentacion del plugin
CKEDITOR.on( 'instanceCreated', function( event ) {
	var editor = event.editor,
	element = editor.element;
	if (element.getAttribute( 'id' ) == 'texto-pagina' ) {
		editor.on( 'configLoaded', function() {
			editor.config.removePlugins = 'bidi,forms,flash,horizontalrule,iframe,justify,smiley,filebrowser,div';
		});
	}
	//se pone para eliminar la primera linea si esta vacia (bug #96)
	if ($('#texto-pagina p:first').html() == ''){
		$('#texto-pagina p:first').remove();
	}
});

//se sacan los componentes que no hacen falta del formulario de nueva novedad
CKEDITOR.replace( 'editortext', {
	removePlugins: 'bidi,forms,flash,horizontalrule,iframe,justify,smiley,filebrowser,div',
	removeButtons: 'Print,Anchor,Preview,Underline,Strike,Subscript,Superscript,About,Save',
	
} );


