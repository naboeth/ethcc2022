pragma solidity >=0.7.0 <0.9.0;

contract CodeGenerator {

    uint[6] code;
    
//OPTION A: Random numbers off-block are more secure as the randomness on the blockchain is easily predictible. But don't need a secure random number here...

//OPTION B: compiles
    function randomNb (uint nb) external view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % nb;
    }

//OPTION C: WIP
    function rand(uint seed) internal pure returns (uint) {
        bytes32 data;
        if (seed % 2 == 0){
            data = keccak256(bytes32(seed));
        }else{
            data = keccak256(keccak256(bytes32(seed)));
        }
        uint sum;
        for(uint i;i < 32;i++){
            sum += uint(data[i]);
        }
        return uint(data[sum % data.length])*uint(data[(sum + 2) % data.length]);
    }

    function randbytes(uint size, uint seed) internal pure returns (byte []) {
        byte [] memory data = new byte[](size);
        uint x = seed;
        for(uint i;i < size;i++){
            x = rand(x);
            data[i] = byte(x % 256);
        }
        return data;
    }

}
