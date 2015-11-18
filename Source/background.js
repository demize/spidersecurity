var enabled = "unknown";
chrome.storage.local.get("enabled", function(en){
	if(en !== "yes" && en !== "no")
	{
		chrome.storage.local.set({"enabled": "yes"});
		enabled = "yes";
	}
	else
	{
		enabled = en;
	}
});

function toggleEnabled()
{
	while(enabled == "unknown")
	{
		// wait
	}

	if(enabled == "yes")
	{
		enabled = "no";
		chrome.storage.local.set({"enabled": "no"});
		chrome.browserAction.setIcon({"path": "logo-disabled.svg"});
	}
	else
	{
		enabled = "yes";
		chrome.storage.local.set({"enabled": "yes"});
		chrome.browserAction.setIcon({"path": "logo.svg"});
	}
}

function handleMessage(request, sender, sendResponse)
{
	while(enabled == "unknown")
	{
		// wait
	}

	sendResponse({isenabled: enabled});
}

chrome.browserAction.onClicked.addListener(toggleEnabled);
chrome.runtime.onMessage.addListener(handleMessage);
