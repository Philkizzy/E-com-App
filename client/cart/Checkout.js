import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import PlaceOrder from './PlaceOrder'
import {Elements} from 'react-stripe-elements'

const useStyles = makeStyles(theme => ({
  card: {
    margin: '24px 0px',
    padding: '16px 40px 90px 40px',
    backgroundColor: '#80808017'
  },
  title: {
    margin: '24px 16px 8px 0px',
    color: theme.palette.openTitle
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.87)',
    marginTop: "20px",
  },
  addressField: {
    marginTop: "4px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "45%"
  },
  streetField: {
    marginTop: "4px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "93%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%"
  }
}))