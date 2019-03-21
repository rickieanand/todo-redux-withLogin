import React, { PureComponent } from 'react';


class AddData extends PureComponent {

    render() {
        const { inputHandler, submitHandler, value } = this.props
        return (
            <>
                <input type='text' onChange={inputHandler} value={value} />
                <input type='submit' value='Add' onClick={submitHandler} />
            </>
        );
    }
}

export default AddData;
