class bigNum{
        constructor(m,e){
          this.m=Math.round(m*100)/100;
          this.e=Number(e);
        }
        add(other){
          var edif=this.e-other.e;
          if (edif>=3){
            return this;
          } else if (edif==2){
            var r=new bigNum(this.m+Math.round(other.m)/100,this.e);
            if (r.m>=10){
              return new bigNum(Math.round(r.m*10)/100,this.e+1);
            } else {
              return r;
            }
          } else if (edif==1){
            var r=new bigNum(this.m+Math.round(other.m*10)/100,this.e);
            if (r.m>=10){
              return new bigNum(Math.round(r.m*10)/100,this.e+1);
            } else {
              return r;
            }
          } else if (edif==0){
            var r=new bigNum(this.m+other.m,this.e);
            if (r.m>=10){
              return new bigNum(Math.round(r.m*10)/100,this.e+1);
            } else {
              return r;
            }
          } else if (edif==-1){
            var r=new bigNum(other.m+Math.round(this.m*10)/100,other.e);
            if (r.m>=10){
              return new bigNum(Math.round(r.m*10)/100,other.e+1);
            } else {
              return r;
            }
          } else if (edif==-2){
            var r=new bigNum(other.m+Math.round(this.m)/100,other.e);
            if (r.m>=10){
              return new bigNum(Math.round(r.m*10)/100,other.e+1);
            } else {
              return r;
            }
          } else {
            return other;
          }
        }
        sub(other){
          var edif=this.e-other.e;
          if (edif>=3){
            return this;
          } else if (edif==2){
            var r=new bigNum(this.m-Math.round(other.m)/100,this.e);
            if (r.m<=1){
              return new bigNum(r.m*10,this.e-1);
            } else {
              return r;
            }
          } else if (edif==1){
            var r=new bigNum(this.m-Math.round(other.m*10)/100,this.e);
            if (r.m<=1){
              return new bigNum(r.m*10,this.e-1);
            } else {
              return r;
            }
          } else if (edif==0){
            var r=new bigNum(this.m-other.m,this.e);
            if (r.m<=1 && r.m>=-1 && !(r.m<=0.1 && r.m>=-0.1)){
              return new bigNum(r.m*10,this.e-1);
            } else if (r.m<=0.1 && r.m>=-0.1) {
              return new bigNum(r.m*100,this.e-2)
            } else {
              return r;
            }
          } else if (edif==-1){
            var r=new bigNum(other.m-Math.round(this.m*10)/100,other.e);
            if (r.m>=-1){
              return new bigNum(r.m*10,other.e-1);
            } else {
              return r;
            }
          } else if (edif==-2){
            var r=new bigNum(other.m-Math.round(this.m)/100,other.e);
            if (r.m>=-1){
              return new bigNum(r.m*10,other.e-1);
            } else {
              return r;
            }
          } else {
            return other;
          }
        }
        mult(other){
          var r=new bigNum(this.m*other.m,this.e+other.e);
          if (r.m>=10){
            return new bigNum(r.m/10,r.e+1);
          } else {
            return r;
          }
        }
        div(other){
          if (this.eq(bigInf)){
            return bigInf;
          } else {
            var r=new bigNum(this.m/other.m,this.e-other.e);
            if (r.m<=0.1){
              return new bigNum(r.m*10,r.e-1);
            } else {
              return r;
            }
          }
        }
        round(){
          if (this.e<=2){
            var m=parse(Math.round(Number(this.toString())).toString()).m;
            this.e=parse(Math.round(Number(this.toString())).toString()).e;
            this.m=m;
          }
          return this;
        }
        fix(){
          if (this.m<0.1 && this.m!=0){
            this.m=Math.round(100*this.m);
            this.e-=2;
          } else if (this.m<1 && this.m!=0){
            this.m=Math.round(10*this.m);
            this.e-=1;
          }
        }
        gte(other){
          return (this.e==other.e && this.m>=other.m) || (this.e>other.e);
        }
        lte(other){
          return (this.e==other.e && this.m<=other.m) || (this.e<other.e);
        }
        eq(other){
          return this.e==other.e && this.m==other.m;
        }
        finite(){
          return this.lte(bigInf);
        }
        finiter(){
          if (!this.finite() && !breakinf){
            this.m=1.8;
            this.e=308;
          }
        }
        toString(){
          if (!breakinf && this.eq(bigInf)){
            return "Infinity";
          } else if (this.e>=6) {
            return this.m.toString()+"e"+stround(this.e);
          } else {
            return Number(this.m.toString()+"e"+this.e.toString()).toString();
          }
        }
      }
      function parse(string){
        if (string=="Infinity"){
          return bigInf;
        } else if (string.split("e").length==1){
          return new bigNum(Number(string)/(10**(string.length-1)),string.length-1);
        } else {
          return new bigNum(string.split("e",2)[0],string.split("e",2)[1])
        }
      }