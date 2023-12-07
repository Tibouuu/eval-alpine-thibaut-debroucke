export default function FormValidation() {
    return {
        fields: {
            name: {
                value: null, error: null,
                rules: ["required", "minLength:2"]
            },
        },
        isFormInvalid: true,
        validateField(field) {
            let res = Iodine.assert(field.value, field.rules);
            field.error = res.valid ?
                null :
                res.error
            ;
            this.isFormValid();
        },
        isFormValid(){
            this.isFormInvalid = Object.values(this.fields).some(
                (field) => field.error
            );
            return ! this.isFormInvalid ;
        },
        submit(e) {
            var ok = this.isFormValid();
            if( ! ok )
                e.preventDefault();
            return ok ;
        }
    }
};
