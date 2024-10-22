import React from 'react';
import KanbanCard from './KanbanCard';
import { FaAdjust , FaRegCircle, FaCheckCircle, FaUser, FaPlus, FaEllipsisH } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';

function KanbanBoard({ tickets, grouping, sorting }) {
  const sortTickets = (a, b) => {
    if (sorting === 'priority') {
      return b.priority - a.priority;
    } else if (sorting === 'title') {
      return a.title.localeCompare(b.title);
    }
  };

  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = grouping === 'status' ? ticket.status :
                grouping === 'user' ? ticket.userId :
                ticket.priority;
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
  
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'todo':
        return <FaRegCircle />;
      case 'in progress':
        return <FaAdjust  color="yellow" />;
      case 'done':
        return <FaCheckCircle color="green" />;
      default:
        return <RxCrossCircled />;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="kanban-column">
          <div className="column-header">
            <div className="column-header-left">
              {grouping === 'user' ? (
                <FaUser />
              ) : (
                getStatusIcon(groupKey)
              )}
              <h3>{groupKey}</h3>
              <span className="task-count">{groupedTickets[groupKey].length}</span>
            </div>
            <div className="column-header-right">
              <FaPlus />
              <FaEllipsisH />
            </div>
          </div>
          {groupedTickets[groupKey].sort(sortTickets).map((ticket) => (
            <KanbanCard
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              tag={ticket.tag}
              priority={ticket.priority}
              // userImage={ticket.userImage}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;

