Class Employee:
	information...
	//--------inherit LeaveRequest----------
	leaveRequest = LeaveRequest()      
	appliedLeave = LeaveRequest.submitLeaveRequest()
	print(appliedLeave)

Class LeaveRequest():
	status = ""
	submitLeaveRequest(){
		update status...
	}
	
Class Manager:
	projectDelivered = false/true
	approvedLeaveRequest(){
		update status...
	}
	rejectLeaveRequest(){
		update status...
	}
	if projectDelivered :
		approvedLeaveRequest()
	else:
		rejectLeaveRequest()