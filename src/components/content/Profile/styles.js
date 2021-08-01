export const objStyles = {
  item: {
    margin: {
      top: 10
    },
    maxWidth: 500,

    '& .ant-input-wrapper': {
      display: 'flex',
      flexWrap: 'wrap'
    },
    '& .ant-input-group-addon': {
      flex: '1 0 200px'
    },
    '& .ant-input[disabled]': {
      color: 'black',
      cursor: 'default'
    },
    '& .ant-input-disabled': {
      color: 'black',
      cursor: 'default'
    }
  }
}