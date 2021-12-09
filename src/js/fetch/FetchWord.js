// Class to fetch function
class FetchWord {
    static searchWord(word) {
        console.log(`Mengambil kata: ${word} `)
        return fetch(`https://new-kbbi-api.herokuapp.com/cari/${word}`)
            .then(response => {
                console.log(`Berhasil mengambil data string`);
                console.log(response);
                return response.json();
            }).then(responseJSON => {
                if (responseJSON) {
                    console.log(`Hasil data JSON`);
                    console.log(responseJSON);
                    return Promise.resolve(responseJSON);
                } else {
                    return Promise.reject(`kata "${word}" tidak ditemukan`)
                }
            })
    }
}

export default FetchWord;