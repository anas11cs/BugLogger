import React,/*useState Hook*/{useState, useEffect/*toFetchDataFromDatabaseAsReactCan't*/} from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import LogItem from './LogItem'
import AddLogItem from './AddLogItem'
import Alert from 'react-bootstrap/Alert'
const App = () => {
	const [logs, setLogs] = useState([
		{
			_id:1,
			text:'This is log One',
			priority: 'moderate',
			user:'Kate',
			created: new Date().toString(),
		},
		{
			_id:2,
			text:'This is log two',
			priority: 'low',
			user:'Brad',
			created: new Date().toString(),
		},
		{
			_id:3,
			text:'This is log Three',
			priority: 'high',
			user:'John',
			created: new Date().toString(),
		},
	])
	const [alert, setAlert] = useState({
		show:false, // When we want to show Alert Message, we put it to true
		message:'',
		variant: 'success'
	})
	
	// Adding Element in the above prototype data
	function addItem(item){
		item._id= Math.floor(Math.random()*90000)+10000
		item.created=new Date().toString()
		if(item.text===null || item.user === null || item.priority === null)
        {
          //Alert()
          console.log('Masti Kar raya aen')
        }
		/*...logs means all the logs from exisiting arrau */
		setLogs([...logs, item])
		showAlert('Log Added !')
	}
	function showAlert(message, variant='success', seconds=3000)
	{
		setAlert({
			show: true,
			message,
			variant
		})
		setTimeout(() => {
			setAlert({
				show: false,
				message: '',
				varinat: 'success'
			})
		}, seconds)
	}
	// Deleting Item from the above Logs
	function deleteItem(id)
	{
		setLogs(logs.filter((item) => item._id !== id))
		showAlert('Log Removed !')
	}
	// The part Below is Rendered on the Screen
	return (
		// <div className='app'>
		// 	<h1>React Electron Boilerplate</h1>
		// 	<p>This is a simple boilerplate for using React with Electron</p>
		// </div>
		<Container>
			<AddLogItem addItem={addItem}/>
			{alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{/*The Code below Iterates to Display the table*/}
					{ logs.map((log) => 
						(
							// props of LogItem below are key, log, deleteItem
							<LogItem key={log._id} log={log} deleteItem={deleteItem}/>
						)
					  )
					}
				</tbody>
			</Table>
		</Container>
	)
}

export default App
