import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ':root': {
    'BorderLine': '0 solid',
    'BorderRadius': '5px'
  },
  'body': {
    'backgroundColor': '#C5AC74'
  },
  'content': {
    'maxWidth': [{ 'unit': 'px', 'value': 1900 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'persons': {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
  },
  'deadpool': {
    'backgroundColor': '#7C5C35',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)' }],
    'border': [{ 'unit': 'string', 'value': 'var(--borderLine)' }],
    'borderRadius': 'var(--borderRadius)'
  },
  'name': {
    'height': [{ 'unit': 'em', 'value': 2.3 }],
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
  },
  'ownerName': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'item': {
    'backgroundColor': '#654d31',
    'marginBottom': [{ 'unit': 'em', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)' }],
    'marginBottom': [{ 'unit': 'em', 'value': 4 }],
    'border': [{ 'unit': 'string', 'value': 'var(--borderLine)' }],
    'borderRadius': 'var(--borderRadius)'
  },
  'deadpool img': {
    'objectFit': 'cover',
    'height': [{ 'unit': 'px', 'value': 450 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'border': [{ 'unit': 'string', 'value': 'var(--borderLine)' }],
    'borderRadius': 'var(--borderRadius) var(--borderRadius) 0 0'
  },
  'dead img': {
    'filter': 'sepia(100%)'
  },
  'dead name': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'headerTop': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': -120 }]
  },
  'headerBottom': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'marginTop': [{ 'unit': 'px', 'value': -120 }],
    'marginBottom': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'logo': {
    'display': 'flex',
    'justifyContent': 'center'
  },
  'logo img': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'maxWidth': [{ 'unit': 'px', 'value': 920 }]
  },
  'source': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'a': {
    'textDecoration': 'none',
    'color': '#7C5C35'
  }
});
