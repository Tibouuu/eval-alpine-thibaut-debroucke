export default function Question() {
    return {
        questionOpen: false,
        init(){
            this.questionOpen = false
        },
        clickQuestion(){
            this.questionOpen = !this.questionOpen
        }

    };
};
