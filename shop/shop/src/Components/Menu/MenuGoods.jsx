import React from 'react';
import {Button, Image, List, Menu, Popup} from "semantic-ui-react/index";



const MenuGoods = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item
            name='browse'>
            Fishing goods
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item
                name='signup'>
                Итого к оплате: {totalPrice} грн.
            </Menu.Item>
            <Popup
                trigger={
                    <Menu.Item
                        name='help'>
                        Корзина: ({count})
                    </Menu.Item>
                }
                content={items.map(product => <BasketComponent {...product}/>)}
                on='click'
                hideOnScroll

            />
        </Menu.Menu>
    </Menu>
)


const BasketComponent = ({image, id, removeFromBasket, title, price}) =>
  (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromBasket.bind(this, id)} color='red'>Delete</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content> {title} -  {price} грн. </List.Content>
        </List.Item>
    </List>
)
export default MenuGoods;