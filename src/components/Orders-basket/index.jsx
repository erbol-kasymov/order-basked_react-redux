import React from "react";
import { data } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { add_order, plus_quantly } from "../../store/actions";
import { Grid, MenuItem, MenuList, Skeleton, Tooltip } from "@mui/material";
import BackspaceIcon from '@mui/icons-material/Backspace';


export const OrderBasket = () => {
  const orders = useSelector(state => state.orders)
  const dispatch = useDispatch()

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
          <h1>Menu</h1>
          <MenuList>
            {data.map((el, id) => {
              return ( 
                <Tooltip title="Click to add">
                  <MenuItem key={id} onClick={() => dispatch(add_order(el))} style={{cursor:'pointer'}}>
                      <img src="https://burgerkings.ru/image/cache/catalog/photo/395727876-gamburger-parmedgano-600x600.jpg"/>
                      <span>Products: {el.title}</span>
                      <br />
                      <b>Price: {el.price}</b>
                  </MenuItem>
                </Tooltip>
              );
            })}
          </MenuList>
      </Grid>
          
      <Grid item xs={8}>
          <h1>Orders</h1>
          <MenuList>
              {
                orders.length ? orders.map((el, id) => {
                  return (
                    <MenuItem key={id}>
                      {el.title}
                      <br />
                      <b>{el.price} * {el.count} = {el.sum}</b>
                      <span>
                        <BackspaceIcon onClick={() => dispatch(plus_quantly(id))}/>
                      </span>
                    </MenuItem>
                  )
                })
                : <div>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
              }
          </MenuList>
      </Grid>
    </Grid>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  
  },
  orderContainer: {
    display: "flex",
    flexDirection: "column",
  },
  // menuContainer: {
  //   with: "50%",
  // },

};
