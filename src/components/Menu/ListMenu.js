import React from 'react'
import { Wrapper, MenuLink } from '../../styles/Menu.element'

const ListMenu = () => {
  const paths = [
    { location: '/prodcast', name: 'برودكاستات' },
    { location: '/contact', name: 'إتصل' },
  ]

  return (
    <>
      <Wrapper>
        {paths.map((item, i) => {
          return (
            <MenuLink
              activeStyle={{
                borderBottom: '2px solid #ee0979',
              }}
              key={i}
              to={item.location}>
              {item.name}
            </MenuLink>
          )
        })}
      </Wrapper>
    </>
  )
}

export default ListMenu
