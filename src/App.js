import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const statusList = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled'];
  const userList = ['Anoop Sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh'];
  const priorityList = [
    { name: 'No priority', priority: 0 },
    { name: 'Low', priority: 1 },
    { name: 'Medium', priority: 2 },
    { name: 'High', priority: 3 },
    { name: 'Urgent', priority: 4 },
  ];

  const [groupValue, setGroupValue] = useState(getStateFromLocalStorage() || 'status');
  const [orderValue, setOrderValue] = useState('title');
  const [ticketDetails, setTicketDetails] = useState([]);

  const orderDataByValue = useCallback((cardsArray) => {
    if (orderValue === 'priority') {
      cardsArray.sort((a, b) => b.priority - a.priority);
    } else if (orderValue === 'title') {
      cardsArray.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB);
      });
    }
    setTicketDetails([...cardsArray]);
  }, [orderValue]);

  function saveStateToLocalStorage(state) {
    localStorage.setItem('groupValue', JSON.stringify(state));
  }

  function getStateFromLocalStorage() {
    const storedState = localStorage.getItem('groupValue');
    return storedState ? JSON.parse(storedState) : null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupValue);

    async function fetchData() {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (response.status === 200) {
          refactorData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    function refactorData(data) {
      const ticketArray = data.tickets.map(ticket => {
        const userObj = data.users.find(user => user.id === ticket.userId);
        return { ...ticket, userObj }; // Attach user object
      });
      setTicketDetails(ticketArray);
      orderDataByValue(ticketArray);
    }
  }, [groupValue, orderDataByValue]);

  function handleGroupValue(value) {
    setGroupValue(value);
  }

  function handleOrderValue(value) {
    setOrderValue(value);
  }

  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
      <div className="board-details-list">
  {{
    'status': (
      <>
        {statusList.map(listItem => {
          const filteredTickets = ticketDetails.filter(ticket => ticket.status === listItem);
          return (
            <List
              key={listItem}
              groupValue="status"
              orderValue={orderValue}
              listTitle={listItem}
              ticketDetails={filteredTickets} // Filter tickets by status
              ticketCount={filteredTickets.length} // Pass the count of tickets
            />
          );
        })}
      </>
    ),
    'user': (
      <>
        {userList.map(user => {
          const filteredTickets = ticketDetails.filter(ticket => ticket.userObj?.name === user);
          return (
            <List
              key={user}
              groupValue="user"
              orderValue={orderValue}
              listTitle={user}
              ticketDetails={filteredTickets} // Filter tickets by user
              ticketCount={filteredTickets.length} // Pass the count of tickets
            />
          );
        })}
      </>
    ),
    'priority': (
      <>
        {priorityList.map(priority => {
          const filteredTickets = ticketDetails.filter(ticket => {
            // Filter tickets by priority and handle 'No priority' case
            if (priority.priority === 0) {
              return ticket.priority === 0 || ticket.priority === null || ticket.priority === undefined;
            }
            return ticket.priority === priority.priority;
          });
          return (
            <List
              key={priority.priority}
              groupValue="priority"
              orderValue={orderValue}
              listTitle={priority.name}
              ticketDetails={filteredTickets} // Filter tickets by priority
              ticketCount={filteredTickets.length} // Pass the count of tickets
            />
          );
        })}
      </>
    )
  }[groupValue]}
</div>
      </section>
    </>
  );
}

export default App;
