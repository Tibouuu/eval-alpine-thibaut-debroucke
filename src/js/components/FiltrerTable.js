
const RecupData = (that) => {
    that.$el.querySelectorAll('[x-model^="filter."]').forEach(function (item) {
        that.filter = item.value;
    });
}

const setDatas = (that, data) => {
    that.datas = that.filteredDatas = that.baseDatas = data;
    that.filterTable();
}

export default function FlightTable(datas) {
    return {
        filter: [],
        filteredDatas: [],
        datas: [],
        baseDatas: [],
        init() {
            RecupData(this);
            fetch(datas)
                .then(response => response.json())
                .then(data => setDatas(this, data))
                .catch(error => console.error('Erreur de chargement:', error));

        },
        typeValues() {
            return [...new Set(this.baseDatas.map(data => data.type))].sort();
        },
        filterTable() {
            if(document.getElementById("type").value !== "Tous"){
                this.filteredDatas = this.baseDatas.filter(data =>
                    data.type === document.getElementById("type").value)
            } else {
                this.filteredDatas = this.baseDatas
            }
        },
    }
}