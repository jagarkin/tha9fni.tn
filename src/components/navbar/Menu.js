import React from 'react'
import { List, Item, Linker } from '../styles/NavBar.element'

const Menu = () => {
  const paths = ['prodcast', 'blog', 'aboutUs', 'FAQ']

  return (
    <>
      <List>
        {paths.map((path, key) => {
          return (
            <Item key={key}>
              <Linker
                //this is a style for the active NavLink
                //feel free to change it when a color theme has ben set
                activeStyle={{ textDecoration: 'underline' }}
                to={`/${path}`}>
                {path}
              </Linker>
            </Item>
          )
        })}
      </List>
    </>
  )
}

export default Menu
