Class Employee:
	ID,Name,LeaveBalance
	leaveRequest = LeaveRequest()   
        project = Project()   
	appliedLeave = LeaveRequest.submitLeaveRequest()
	leaveRequest.checkLeaveStatus()

Class LeaveRequest():
	status = ""
	submitLeaveRequest(){
		update status...
	}
        checkLeaveStatus(){
        	return status
        }

Class Project():
        ID,Name,EstimatedDate
	getProjectDetails(){}
	checkDeliverableStatus(){}

Class HRManager:
	leaveRequest = LeaveRequest() 
	project = Project()
	approvedLeaveRequest(){
		update status...
	}
	rejectLeaveRequest(){
		update status...
	}
	if project.checkDeliverableStatus:
		approvedLeaveRequest()
	else:
		rejectLeaveRequest()
