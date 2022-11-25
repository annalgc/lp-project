import { Box } from "./components/Box"
import "./App.css";
import { DateInput } from "./components/DateInput";
import { Table } from "./components/Table";
import { useState } from "react";

function App() {
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  return (
    <main className="container">
      <header className="header-container">
        <img src="src/assets/header-image.png" />
        <h1 className="hc-title">LPII</h1>
        <h3 className="hc-name">Desenvolvido por @viniciusmsnlp@hotmail.com</h3>
      </header>

      <section className="content">
        <Box>
          <span className="cb-title">Vendas</span>

          <DateInput value={startDate} onChange={evt => setStartDate(evt.target.value)} />
          <DateInput value={endDate} onChange={evt => setEndDate(evt.target.value)} />

          <Table startDate={startDate} endDate={endDate} />
        </Box>
      </section>
    </main>
  )
}

export default App
