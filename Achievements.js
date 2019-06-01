class Achievements{
	
	constructor(){
		this.observerCollection = [];
		this.tamanho = 0;
	}
	

	addObserver(observer){
		this.observerCollection.push(observer);
	}

	notifyObservers(){
		for(var a=0; a<this.observerCollection.length; a++){
			this.observerCollection[a].notify();
		}
	}
}