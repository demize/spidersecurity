chrome.runtime.sendMessage({request: "Am I enabled?"}, 
	function(response)
	{
		if(response.isenabled == "yes")
		{
			walk(document.body);
		}
	});

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/cybersecurity/g, "spider security");
	v = v.replace(/Cybersecurity/g, "Spider security");
	v = v.replace(/cyber/g, "spider");
	v = v.replace(/Cyber/g, "Spider");
	
	textNode.nodeValue = v;
}


