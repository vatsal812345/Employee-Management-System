import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const TaskList = ({ data, updateTaskStatus }) => {


  return (
    <div id='tasklist' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 overflow-y-auto max-h-[500px] animate-fade-in pr-2'>
      {data.tasks.map((elem, idx) => {

        if (elem.active) {

          return <AcceptTask
            key={idx}
            data={{
              ...elem,
              onComplete: () => updateTaskStatus(idx, 'completed'),
              onFailed: () => updateTaskStatus(idx, 'failed')
            }}
          />

        }

        if (elem.newTask) {
          return <NewTask
            key={idx}
            data={{
              ...elem,
              onAccept: () => updateTaskStatus(idx, 'accepted')
            }}
          />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }

      })}








    </div>
  )
}
export default TaskList

