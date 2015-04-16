function Employee(emp) {
	this.name = emp.name;
	this.designation = emp.designation;
	this.email = emp.email;
	var id = emp.id;
	/*var createEmployee = function() {
		var content = '';
		content += '<tr class="delete'+this.constructor.employeeCount+'">'+
						'<td class="name'+this.constructor.employeeCount+'">'+this.name+'</td>'+
						'<td class="designation'+this.constructor.employeeCount+'">'+this.designation+'</td>'+
						'<td class="email'+this.constructor.employeeCount+'">'+this.email+'</td>'+
						'<td class="action">'+
							'<button type="button" onclick="editSingleEmployee(&quot;'+this.constructor.employeeCount+'&quot;);">Edit</button>'+
							'<button type="button" onclick="deleteSingleEmployee(&quot;'+this.constructor.employeeCount+'&quot;);">Delete</button>'+
						'</td>'+
					'</tr>';
		return content;
	};*/
	var clearFields = function() {
		document.getElementById("employee-name").value = '';
		document.getElementById("employee-designation").value = '';
		document.getElementById("employee-email").value = '';
		document.getElementById("add-button").setAttribute('data-editId', '');
		document.getElementById("add-button").innerHTML = "Add employee";
	};
	this.add = function(){
		if(!id || id == null || id == undefined) {
			document.getElementById("employeeTable").innerHTML += '<tr id="delete'+this.constructor.employeeCount+'">'+
																		'<td id="name'+this.constructor.employeeCount+'">'+this.name+'</td>'+
																		'<td id="designation'+this.constructor.employeeCount+'">'+this.designation+'</td>'+
																		'<td id="email'+this.constructor.employeeCount+'">'+this.email+'</td>'+
																		'<td id="action">'+
																			'<button type="button" onclick="editSingleEmployee(&quot;'+this.constructor.employeeCount+'&quot;);">Edit</button>'+
																			'<button type="button" onclick="deleteSingleEmployee(&quot;'+this.constructor.employeeCount+'&quot;);">Delete</button>'+
																		'</td>'+
																	'</tr>';
			this.constructor.employeeCount++;		
		} else {
			document.getElementById("name"+id).innerHTML = this.name;
			document.getElementById("designation"+id).innerHTML = this.designation;
			document.getElementById("email"+id).innerHTML = this.email;
		}
		clearFields();
	};
	/*this.loadEmployee = function(){
		document.getElementById("add-button").setAttribute('data-editId', editId);
		document.getElementById("employee-name").value = document.getElementById("name"+editId).innerHTML;
		document.getElementById("employee-designation").value = document.getElementById("designation"+editId).innerHTML;
		document.getElementById("employee-email").value = document.getElementById("email"+editId).innerHTML;
	};*/
}
Employee.employeeCount = 0;

function addEmployee() {
	var employee = getInputValues();
	var newEmployee = new Employee(employee);
	newEmployee.add();
}
function getInputValues(){
	var employee = {};
	employee.id = document.getElementById("add-button").getAttribute('data-editId');
	employee.name = document.getElementById("employee-name").value;
	employee.designation = document.getElementById("employee-designation").value;
	employee.email = document.getElementById("employee-email").value;
	return employee;
}
function editSingleEmployee(editId) {
	/*var editEmployee = Employee('');
	editEmployee.loadEmployee();
	editEmployee.prototype.loadEmployee = function(){
		document.getElementById("add-button").setAttribute('data-editId', editId);
		document.getElementById("employee-name").value = document.getElementById("name"+editId).innerHTML;
		document.getElementById("employee-designation").value = document.getElementById("designation"+editId).innerHTML;
		document.getElementById("employee-email").value = document.getElementById("email"+editId).innerHTML;
	};
	editEmployee.loadEmployee();*/
	document.getElementById("add-button").innerHTML = "Edit employee";
	document.getElementById("add-button").setAttribute('data-editId', editId);
	document.getElementById("employee-name").value = document.getElementById("name"+editId).innerHTML;
	document.getElementById("employee-designation").value = document.getElementById("designation"+editId).innerHTML;
	document.getElementById("employee-email").value = document.getElementById("email"+editId).innerHTML;
}
function deleteSingleEmployee(editId) {
	var child = document.getElementById("delete"+editId);
	child.parentNode.removeChild(child);
}