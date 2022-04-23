import { useState } from 'react'

const AddTask = () => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

  return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="task"> Task </label>
                <input name="task" type="text" placeholder="Add Task" 
                value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day"> Day & Time </label>
                <input name="day" type="text" placeholder="Add Day &Time" 
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="task"> Set Reminder </label>
                <input name="task" type="checkbox" 
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" type='submit' value='Save Task' />
        </form>
  )
}

export default AddTask