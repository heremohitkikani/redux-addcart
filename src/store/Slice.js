import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    alldata: [],
    category: [],
    all: [],
    cartdata: [],
    incre: Array(100).fill(1),
    price: [],
    allprice: [],
    totalprice: 0,
    pricedisc: [],
    netprice:[],
    nettotal:0


}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        datahandler: (state, action) => {
            state.alldata = [...action.payload]
            state.all = [...action.payload]
            console.log(state.alldata);
        },
        datacategory: (state, action) => {
            state.category = [...action.payload]
            console.log(state.category);
        },
        searchdata: (state, action) => {
            let serdata = state.alldata.filter((ele) => {
                return ele.title.toLowerCase().includes(action.payload.toLowerCase())
            })
            alert(action.payload);
            state.alldata = [...serdata]
        },
        allitems: (state, action) => {
            state.alldata = [...action.payload]
            // console.log(state.category);
        },
        carthandler: (state, action) => {
            state.cartdata = [...state.cartdata, action.payload]
            state.price = [...state.price, action.payload.price]
            state.allprice = [...state.allprice, action.payload.price]
            state.totalprice += action.payload.price;

            let i = (action.payload.price - (((action.payload.discountPercentage * action.payload.price) / 100)));
            state.pricedisc = [...state.pricedisc, i];
            state.netprice = [...state.netprice, i]
            state.nettotal += i;





        },
        increment: (state, action) => {
            state.allprice[action.payload.ind] += state.price[action.payload.ind];
            state.netprice[action.payload.ind]+=state.pricedisc[action.payload.ind];

            state.incre[action.payload.ind] += 1;

            state.totalprice += state.price[action.payload.ind];

            // let i = (action.payload.price - (((action.payload.disc * action.payload.price) / 100)));
            // state.nettotal += i;

            // let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
            state.nettotal +=state.pricedisc[action.payload.ind] ;
            //   }
            // }
        },
        decrement: (state, action) => {
            // console.log(state.data.length);
            // console.log(action.payload.price);


            state.incre[action.payload.ind] -= 1;
            state.allprice[action.payload.ind] -= state.price[action.payload.ind];
            state.netprice[action.payload.ind]-=state.pricedisc[action.payload.ind];

            state.totalprice -= state.price[action.payload.ind];
            // let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
            state.nettotal -=state.pricedisc[action.payload.ind] ;


            // state.allprice[action.payload.ind]-=state.data[action.payload.ind].price;
            // state.netprice[action.payload.ind]-=state.pricedisc[action.payload.ind];


            // console.log(state.incre[action.payload.ind]);
            // state.totalprice -= state.prisingle[action.payload.ind];
            // state.nettotal -= state.netprice[action.payload.ind];

            // let i=(action.payload.price-(((action.payload.disc* action.payload.price)/100)));
            // state.nettotal -= i;


        },
        removecart: (state, action) => {
            console.log(state.data);
            state.totalprice=state.totalprice-state.allprice[action.payload.ind];
            state.nettotal=state.nettotal-state.netprice[action.payload.ind];
      
            state.cartdata = state.cartdata.filter((ele, ind) => {
              return ind !== action.payload.ind;
            })
            console.log(state.cartdata);
            state.price = state.price.filter((ele, ind) => {
              return ind !== action.payload.ind;
            })
            state.incre = state.incre.filter((ele, ind) => {
              return ind !== action.payload.ind;
            })
            state.allprice = state.allprice.filter((ele, ind) => {
              return ind !== action.payload.ind;
            })
            state.pricedisc = state.pricedisc.filter((ele, ind) => {
              return ind !== action.payload.ind;
            })
            state.netprice = state.netprice.filter((ele, ind) => {
              return ind !== action.payload.ind;
            })
            console.log(state.data);
            console.log(action.payload.price);
      
          },

    },
})

// Action creators are generated for each case reducer function
export const { increment, datahandler, datacategory, searchdata, allitems, carthandler, decrement,removecart } = counterSlice.actions

export default counterSlice.reducer