function UserInput() {
    return (
        <div className="container">
            <form action="">
                <div className="col">
                    <input className="form-control" type="file" id="files" multiple />
                </div>
                <div className="col">
                    <div className="row mt-3">
                        <div className="col-md-10 col-12">
                            <textarea className="form-control" id="user-input-text" rows="1"></textarea>
                        </div>
                        <div className="col-12 col-md-2 d-grid mt-md-0 mt-3">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserInput