export default function TextAreaField({label, value, setValue}){
    return (
        <div class="form-group green-border-focus"> 
            <label for="text">
                {label}
            </label>
            <textarea class="form-control" id="text" rows="3" value={value} onChange={event => setValue(event.target.value)}>
            </textarea>
        </div>
    )
}