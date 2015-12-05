    it("Deve validar o CPF", function(){
    	var cpf = new CPF();
        expect(cpf.valida('137686636-63')).toBeTruthy();
    });
