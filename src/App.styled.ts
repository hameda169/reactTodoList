import styled from '@emotion/styled';

export const Container = styled('div')({
  background: 'linear-gradient(#e6646533, #9198e588)',
  height: '100%'
});
export const Select = styled('button')(
  {
    padding: '2px 10px',
    margin: '5px',
    fontSize: 16,
    borderRadius: '10px'
  },
    (props: any) => ({
    backgroundColor: props.disabled ? '#33aa22' : '',
    color: props.disabled ? '#fff' : ''
  })
);
export const AddButton = styled('button')({
  fontFamily: 'MyFont',
  borderWidth: 0,
  backgroundColor: 'transparent',
  fontSize: 16,
  color: '#5c85c7',
  transition: 'all 0.5s',
  '&:hover': {
    color: '#2db503',
    transform: 'scale(2)'
  }
});
export const RemoveButton = styled('button')({
    fontFamily: 'MyFont',
    borderWidth: 0,
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#5c85c7',
    transition: 'all 0.5s',
    '&:hover': {
      color: '#e22b0a',
      transform: 'scale(1.5)'
    }
  }
);
export const Item = styled('div')`margin: 10px;`;
export const NewTaskInput = styled('input')`border-width: 0;padding: 5px;font-size: 15px;`;
