import "./CalendarPage.css"
import { Container } from 'react-bootstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const CalendarPage = () => {

  return (
    <Container className="mt-3 calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Cita Ronnie', date: '2021-10-11' },
          { title: 'Hackathon', date: '2021-10-24' }
        ]}
        contentHeight={360}
        headerToolbar={{
          left: '',
          center: 'title',
          right: '',
        }}
        footerToolbar={{
          left: 'prev',
          center: 'today',
          right: 'next',
        }}
      />
    </Container>
  )

}


export default CalendarPage
