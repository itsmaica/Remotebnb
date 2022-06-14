function ReviewEdit(){
    return (
        <>
            <div>
                <form >
                    <label />
                    <input
                    className="form-input"
                    type="text"
                    placeholder={review.review}
                    value={editReview}
                    onChange={(e) => setEditReview(e.target.value)}
                    required
                    />
                </form>
                <button>Submit</button>
                <button onClick={()=>setEdit(false)}>Cancel</button>
            </div>
        </>
    )
}

export default ReviewEdit
