import React from 'react';
import './List.css';
import Card from '../Card/Card';
import Backlog from '../../Assets/Images/Backlog.svg';
import Cancelled from '../../Assets/Images/Cancelled.svg';
import Done from '../../Assets/Images/Done.svg';
import InProgress from '../../Assets/Images/in-progress.svg';
import ToDo from '../../Assets/Images/Todo.svg';
import add from '../../Assets/Images/add.svg';
import dot from '../../Assets/Images/dot.svg';

export default function List(props) {
  // Use local variable for card count
  let cardCount = 0;

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="list-header-left">
          {/* Icon based on the group value and title */}
          <div className="list-icon">
            {{
              'status': {
                'Backlog': <StatusIcon type="backlog" />,
                'Todo': <StatusIcon type="todo" />,
                'In progress': <StatusIcon type="in-progress" />,
                'Done': <StatusIcon type="done" />,
                'Cancelled': <StatusIcon type="cancelled" />
              }[props.listTitle],
              'user': null,
              'priority': {
                0: <PriorityIcon priority={0} />,
                1: <PriorityIcon priority={1} />,
                2: <PriorityIcon priority={2} />,
                3: <PriorityIcon priority={3} />,
                4: <PriorityIcon priority={4} />
              }[props.listTitle]
            }[props.groupValue]}
          </div>

          <div className="list-title">
            {props.listTitle}
          </div>
          <div className="list-sum">{cardCount}</div>
        </div>
        <div className="list-header-right">
          <div className="list-add-item">
          
          <img src={add} alt="add" width="18" height="18" viewBox="0 0 24 24"/>
            
          </div>
          <div className="list-option-item">
          <img src={dot} alt="add" width="18" height="18" viewBox="0 0 24 24"/>
          </div>
        </div>
      </div>

      <div className="list-card-items">
        {props.ticketDetails.map(ticket => {
          // Determine if the ticket matches the current list title based on group value
          const matches =
            (props.groupValue === 'status' && ticket.status === props.listTitle) ||
            (props.groupValue === 'priority' && ticket.priority === parseInt(props.listTitle, 10)) ||
            (props.groupValue === 'user' && ticket.userObj?.name === props.listTitle);

          if (matches) {
            cardCount++;
            return <Card key={ticket.id} cardDetails={ticket} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

// Icon components for better modularity
function StatusIcon({ type }) {
    const icons = {
      backlog: <img src={Backlog} alt="Backlog" width="22" height="22" />,
      todo: <img src={ToDo} alt="ToDo" width="22" height="22" />,
      'in-progress': <img src={InProgress} alt="In Progress" width="22" height="22" />,
      done: <img src={Done} alt="Done" width="22" height="22" />,
      cancelled: <img src={Cancelled} alt="Cancelled" width="22" height="22" />,
    };
  
    return icons[type] || null;
  }

function PriorityIcon({ priority }) {
  return (
    <span className={`priority-icon priority-${priority}`}>
      {/* You can customize this further if needed */}
      {priority}
    </span>
  );
}
