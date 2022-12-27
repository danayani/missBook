export function AppHeader({ onSetPage }) {

  return <React.Fragment>
    <h1>Miss Book</h1>
    <nav className="app-nav">
      <a href="#" onClick={(ev) => onSetPage(ev, 'home')}>Home</a> |
      <a href="#" onClick={(ev) => onSetPage(ev, 'about')}>About</a> |
      <a href="#" onClick={(ev) => onSetPage(ev, 'book')}>Books</a>
    </nav>
    </ React.Fragment>
}
