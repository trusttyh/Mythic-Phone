RegisterNUICallback("LEOPin", function(data, cb)
	cb(true)
	SetNewWaypoint(data.x, data.y)
end)

RegisterNUICallback("SearchPeople", function(data, cb)
	Callbacks:ServerCallback("Phone:LEOAsist:SearchPeople", data, function(res)
		cb(res)
	end)
end)
