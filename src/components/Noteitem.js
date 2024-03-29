import React, { useContext } from 'react'
import noteContext from '../context/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div style={{ color: "white", background: "grey" }} className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" style={{ cursor: 'pointer' }} onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Delted successfully", "success")
                        }}></i>
                        <i className="far fa-edit mx-2" style={{ cursor: 'pointer' }} onClick={() => {
                            updateNote(note);
                            // props.showAlert("Updated successfully", "success")
                        }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
