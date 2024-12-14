function UserInput({ setData }) {
    async function handle(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const { file, text } = Object.fromEntries(formData.entries());

        if (file) {
            const formData = new FormData();
            formData.append("law", file);
            const response = await fetch('http://localhost:8000/tax-info/file', {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setData(data);
        } else if (text) {
            const response = await fetch('http://localhost:8000/tax-info/text', {
                method: "POST",
                body: text
            })
            setData(data);
        }

    }

    return (
        <div className="container">
            <form action="" onSubmit={handle}>
                <div className="col">
                    <input className="form-control" type="file" name="file" id="files" />
                </div>
                <div className="col">
                    <div className="row mt-3">
                        <div className="col-md-10 col-12">
                            <textarea className="form-control" id="user-input-text" name="text" rows="1"></textarea>
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
