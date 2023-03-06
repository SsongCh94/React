// action value
export const PLUS_ONE = 'counter/PLUS_ONE';
export const MINUS_ONE = 'counter/MINUS_ONE';

// action creator : action value 를 return 하는 함수
export const plusOne = () => {
    return {
        type: PLUS_ONE,

    };
};

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

// 초기 상태값(state)
const initialState = {
    number : 0
}; 

// 리듀서 : 'state에 변화를 일으키는' 함수
// state를 action의 type에 따라 변경하는 함수.
// input : state 와 action
// state 는 initialState를 받는다.
// action은 객체 형태로 되어있고, 객체는 action의 타입과 벨류를 가진다.
// action은 state를 어떻게 할 건지 (수정) 를 나타낸다.

const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        default:
            return state;
    }
}

export default counter;