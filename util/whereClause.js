
class WhareClause {
    constructor(base,bigQ){
        this.base = base,
        this.bigQ = bigQ
    }
    search(){
        const searchword = this.bigQ.search?{ //searching with regular expression
            name:{
$regex:this.bigQ.search,
$options:"i" //ignoring the case sensitive
            }
        }:{}
        this.base = this.base.find({...searchword}) // spring the values and finding in the DB
        return this // returning all the things (base,bigQ)
    }
    filter(){
       const copyQ = {...this.bigQ} // coping to the copyQ to make a copy 
       delete copyQ["search"]; // deleting already done
       delete copyQ["limit"];
       delete copyQ["page"];
       // converting bigQ to string which removed uneeded things
       let stringCopyQ = JSON.stringify(copyQ);
       stringCopyQ = stringCopyQ.replace( /\b(gte|lte|gt|lt)\b/g,
       (m) => `$${m}`)
       const jsonOfCopyQ = JSON.parse(stringCopyQ);
       this.base = this.base.find(jsonOfCopyQ);
       return this
    }
    pager(resultperPage){
        let currentPage = 1;
        if(this.bigQ.page){
            currentPage = this.bigQ.page
        }
        const skipVal = resultperPage * (currentPage - 1);
        this.base = this.base.limit(resultperPage).skip(skipVal);
        return this;
    }
}

module.exports = WhareClause;